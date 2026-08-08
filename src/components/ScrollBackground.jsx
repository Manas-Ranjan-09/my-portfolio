import React, { useEffect, useRef, useState } from 'react';

export default function ScrollBackground() {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const frameCount = 300;
  const imagesRef = useRef([]);
  const targetFrameRef = useRef(1);
  const currentFrameRef = useRef(1);

  // Pad number with leading zeros (e.g., 1 -> 001)
  const pad = (num, size) => {
    let s = "000" + num;
    return s.slice(-size);
  };

  const getFramePath = (index) => {
    return `/frames/ezgif-frame-${pad(index, 3)}.jpg`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let loadedCount = 0;
    let animationFrameId = null;

    // Setup offscreen canvas for color sampling
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = 4;
    offscreenCanvas.height = 4;
    const offscreenCtx = offscreenCanvas.getContext('2d');

    // Linear interpolation for smooth easing
    const lerp = (start, end, amt) => {
      return (1 - amt) * start + amt * end;
    };

    // Draw frame to canvas
    const drawFrame = (frameIndex) => {
      const index = Math.min(frameCount, Math.max(1, Math.round(frameIndex)));
      const image = imagesRef.current[index - 1];
      if (image && image.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Extract average background color and relative luminance
        try {
          offscreenCtx.clearRect(0, 0, 4, 4);
          offscreenCtx.drawImage(image, 0, 0, 4, 4);
          const imgData = offscreenCtx.getImageData(0, 0, 4, 4).data;

          let r = 0, g = 0, b = 0;
          for (let i = 0; i < imgData.length; i += 4) {
            r += imgData[i];
            g += imgData[i + 1];
            b += imgData[i + 2];
          }
          const count = imgData.length / 4;
          r = Math.round(r / count);
          g = Math.round(g / count);
          b = Math.round(b / count);

          // Relative luminance calculation
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

          // Toggle light/dark body themes based on background luminance
          if (luminance > 0.46) {
            document.body.classList.add('theme-light');
            document.body.classList.remove('theme-dark');
          } else {
            document.body.classList.add('theme-dark');
            document.body.classList.remove('theme-light');
          }

          // Expose raw RGB values and luminance to CSS variables
          document.documentElement.style.setProperty('--bg-avg-r', r);
          document.documentElement.style.setProperty('--bg-avg-g', g);
          document.documentElement.style.setProperty('--bg-avg-b', b);
          document.documentElement.style.setProperty('--bg-luminance', luminance.toFixed(3));
        } catch (e) {
          console.warn('Luminance extraction failed:', e);
        }
      }
    };

    // Update scroll target frame
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      if (maxScroll <= 0) return;
      
      const scrollFraction = scrollTop / maxScroll;
      // Map scroll progress (0.0 to 1.0) to frame indices (1 to 300)
      targetFrameRef.current = 1 + scrollFraction * (frameCount - 1);
    };

    // Animation Tick loop
    let lastDrawnFrame = -1;
    const tick = () => {
      currentFrameRef.current = lerp(
        currentFrameRef.current,
        targetFrameRef.current,
        0.12 // Lerp rate
      );

      const frameToDraw = Math.round(currentFrameRef.current);
      if (frameToDraw !== lastDrawnFrame) {
        drawFrame(frameToDraw);
        lastDrawnFrame = frameToDraw;
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    // Preload all frames
    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = getFramePath(i);
        img.onload = () => {
          loadedCount++;
          const percentage = Math.round((loadedCount / frameCount) * 100);
          setProgress(percentage);

          // Configure canvas aspect ratio based on the first loaded frame
          if (loadedCount === 1) {
            canvas.width = img.naturalWidth || 1920;
            canvas.height = img.naturalHeight || 1080;
          }

          if (loadedCount === frameCount) {
            setIsLoaded(true);
            // Draw first frame initially
            drawFrame(1);
            // Start tick loop
            animationFrameId = requestAnimationFrame(tick);
          }
        };
        img.onerror = () => {
          // Prevent hanging if frame loading fails
          loadedCount++;
          if (loadedCount === frameCount) {
            setIsLoaded(true);
            drawFrame(1);
            animationFrameId = requestAnimationFrame(tick);
          }
        };
        imagesRef.current.push(img);
      }
    };

    // Start loading
    preloadImages();

    // Listen to scroll and resize
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <>
      {/* Canvas scroll container */}
      <div className="fixed inset-0 w-screen h-screen overflow-hidden flex justify-center items-center bg-[#0a0a0c] z-1 pointer-events-none">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full object-cover block pointer-events-none"
        ></canvas>
        {/* Dynamic vignette and dark overlay for premium readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/50 via-transparent to-[#0a0a0c]/65 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(10,10,12,0.55)_100%)] pointer-events-none"></div>
      </div>
    </>
  );
}
