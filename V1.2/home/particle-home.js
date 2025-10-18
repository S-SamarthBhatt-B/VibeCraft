
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

let width, height;
const shapes = [];
const shapeTypes = ["circle", "triangle", "square"];
const colors = ["#ffffff", "#00ffff", "#ff00ff", "#00ff88"];

function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

class Shape {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = 8 + Math.random() * 8;
    this.type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.angle = Math.random() * Math.PI * 2;
    this.speed = 0.2 + Math.random() * 0.4;
    this.opacity = 0.6 + Math.random() * 0.4;
    this.pulse = Math.random() > 0.5;
  }

  update() {
    this.y -= this.speed;
    this.angle += 0.01;
    if (this.y + this.size < 0) this.reset();
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.globalAlpha = this.opacity;

    ctx.beginPath();
    switch (this.type) {
      case "circle":
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        break;
      case "square":
        ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
        break;
      case "triangle":
        ctx.moveTo(0, -this.size);
        ctx.lineTo(this.size, this.size);
        ctx.lineTo(-this.size, this.size);
        ctx.closePath();
        break;
    }

    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.restore();
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (const shape of shapes) {
    shape.update();
    shape.draw(ctx);
  }
  requestAnimationFrame(animate);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);
for (let i = 0; i < 60; i++) shapes.push(new Shape());
animate();
