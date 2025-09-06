const canvas = document.getElementById('nebulaCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Partiküller
const particles = [];
const particleCount = 250; // Daha fazla partikül, daha canlı nebula

for(let i=0; i<particleCount; i++){
    particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        radius: Math.random()*3+1, // Daha büyük partiküller
        dx: (Math.random()-0.5)*0.3,
        dy: (Math.random()-0.5)*0.3,
        r: Math.floor(Math.random()*255),
        g: Math.floor(Math.random()*255),
        b: Math.floor(Math.random()*255)
    });
}

// Animasyon
function animate(){
    ctx.fillStyle = 'rgba(0,0,0,0.1)'; // Hafif trail efekti
    ctx.fillRect(0,0,canvas.width,canvas.height);

    particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.dy *= -1;

        // Gradient ile yumuşak bulut efekti
        let grad = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.radius*8);
        grad.addColorStop(0, `rgba(${p.r},${p.g},${p.b},0.5)`); // daha görünür
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();
