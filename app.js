const canvas = document.getElementById('animation-canvas');
const ctx = canvas.getContext('2d');
const loader = document.getElementById('loader');
const progressBar = document.getElementById('progress');
const progressText = document.getElementById('progress-text');
const scrollPrompt = document.getElementById('scroll-prompt');

const frameCount = 300;
const images = [];
let loadedCount = 0;

// Helper to pad numbers with leading zeros (e.g. 1 -> 001)
const pad = (num, size) => {
    let s = "000" + num;
    return s.slice(-size);
};

// Return the path for a given frame index
const getFramePath = (index) => {
    return `frames/ezgif-frame-${pad(index, 3)}.jpg`;
};

// Track scroll position
let targetFrameIndex = 1;
let currentFrameIndex = 1;

// Preload all frames
function preloadImages() {
    return new Promise((resolve) => {
        // Pre-create image elements
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = getFramePath(i);
            img.onload = () => {
                loadedCount++;
                const progressPercentage = Math.round((loadedCount / frameCount) * 100);
                progressBar.style.width = `${progressPercentage}%`;
                progressText.textContent = `${progressPercentage}%`;

                // Set canvas aspect ratio based on the first loaded frame
                if (loadedCount === 1 || (canvas.width === 0 && img.naturalWidth > 0)) {
                    canvas.width = img.naturalWidth || 1920;
                    canvas.height = img.naturalHeight || 1080;
                }

                if (loadedCount === frameCount) {
                    resolve();
                }
            };
            img.onerror = () => {
                // If a frame fails to load, count it anyway so loader doesn't get stuck
                loadedCount++;
                console.warn(`Failed to load frame: ${img.src}`);
                if (loadedCount === frameCount) {
                    resolve();
                }
            };
            images.push(img);
        }
    });
}

// Draw a specific frame to the canvas
function drawFrame(frameIndex) {
    const index = Math.min(frameCount, Math.max(1, Math.round(frameIndex)));
    const image = images[index - 1];
    if (image && image.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
}

// Update scroll target frame
function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    if (maxScroll <= 0) return;
    
    const scrollFraction = scrollTop / maxScroll;
    
    // Map scroll progress (0.0 to 1.0) to frame indices (1 to 300)
    targetFrameIndex = 1 + scrollFraction * (frameCount - 1);
    
    // Fade scroll prompt when user scrolls down
    if (scrollTop > 40) {
        scrollPrompt.classList.add('hide');
    } else {
        scrollPrompt.classList.remove('hide');
    }
}

// Linear interpolation (lerp) function
const lerp = (start, end, amt) => {
    return (1 - amt) * start + amt * end;
};

// Smooth animation loop
let lastDrawnFrame = -1;
function animate() {
    // Lerp the frame index for buttery-smooth transition
    currentFrameIndex = lerp(currentFrameIndex, targetFrameIndex, 0.12);
    
    const frameToDraw = Math.round(currentFrameIndex);
    
    // Only redraw if the rounded frame index changed
    if (frameToDraw !== lastDrawnFrame) {
        drawFrame(frameToDraw);
        lastDrawnFrame = frameToDraw;
    }
    
    requestAnimationFrame(animate);
}

// Start everything
async function init() {
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    
    // Resize handler (in case size calculation needs updating, canvas aspect ratio is already set)
    window.addEventListener('resize', () => {
        // Redraw current frame
        drawFrame(currentFrameIndex);
    });

    // Run preload
    await preloadImages();

    // Fade loader out
    loader.classList.add('fade-out');

    // Initial draw
    updateScrollProgress();
    drawFrame(1);

    // Run the animation loop
    requestAnimationFrame(animate);
}

init();
