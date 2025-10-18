const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;
const dpr = window.devicePixelRatio || 1;

// Resize for high-DPI screens
function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Setup particles
const PARTICLE_COUNT = 70;
const MAX_DIST = 110;
const SHAPES = ["circle", "square", "triangle"];
const particles = [];

for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8,
    size: Math.random() * 3 + 2,
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    hue: Math.floor(Math.random() * 360),
    rotation: Math.random() * 360
  });
}

function drawShape(p) {
  const color = `hsl(${p.hue}, 100%, 70%)`;

  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate((p.rotation * Math.PI) / 180);

  ctx.shadowBlur = 10;
  ctx.shadowColor = color;
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.beginPath();

  switch (p.shape) {
    case "circle":
      ctx.arc(0, 0, p.size, 0, Math.PI * 2);
      break;
    case "square":
      ctx.rect(-p.size / 2, -p.size / 2, p.size, p.size);
      break;
    case "triangle":
      ctx.moveTo(0, -p.size);
      ctx.lineTo(p.size, p.size);
      ctx.lineTo(-p.size, p.size);
      ctx.closePath();
      break;
  }

  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MAX_DIST) {
        const avgHue = (particles[i].hue + particles[j].hue) / 2;
        ctx.strokeStyle = `hsla(${avgHue}, 100%, 70%, 0.1)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  for (let p of particles) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x <= 0 || p.x >= width) p.vx *= -1;
    if (p.y <= 0 || p.y >= height) p.vy *= -1;

    // Rotate only non-circles
    if (p.shape !== "circle") {
      p.rotation += 0.5;
    }

    // Color shift
    p.hue = (p.hue + 0.4) % 360;

    drawShape(p);
  }

  drawConnections();
  requestAnimationFrame(animate);
}

animate();
