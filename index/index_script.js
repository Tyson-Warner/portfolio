(function () {
const blob = document.querySelector('.cursor-blur');
if (!blob) return;

// Smooth follow (ease toward cursor)
let x = window.innerWidth / 2, y = window.innerHeight / 2;
let targetX = x, targetY = y;

window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
}, { passive: true });

function tick() {
    // Lerp toward target for a buttery trail
    const speed = 0.18;                  // lower = slower, more lag
    x += (targetX - x) * speed;
    y += (targetY - y) * speed;
    blob.style.transform = `translate(${x - 0.5 * blob.offsetWidth}px, ${y - 0.5 * blob.offsetHeight}px)`;
    requestAnimationFrame(tick);
}
tick();

// Keep centered math valid on resize
window.addEventListener('resize', () => {
    x = window.innerWidth / 2;
    y = window.innerHeight / 2;
});
})();
