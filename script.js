// Optional: falling hearts animation
const body = document.body;

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = '-50px';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.animation = 'fall 5s linear forwards';
    body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 500);

const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(${window.innerHeight + 50}px) rotate(360deg);
        opacity: 0;
    }
}`;
document.head.appendChild(style);
