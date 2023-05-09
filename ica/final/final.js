const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const stopButton = document.getElementById("stop-button");
const startButton = document.getElementById("start-button");
const speedSlider = document.getElementById("speed-slider");
const redButton = document.getElementById("red-button");
const greenButton = document.getElementById("green-button");
const blueButton = document.getElementById("blue-button");

let balls = [];

class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.originalColor = color;
  }

  hover() {
    const ball = this; 
    canvas.addEventListener("mousemove", (event) => {
      const mousePositionX = event.clientX;
      const mousePositionY = event.clientY;
      const distance = Math.sqrt(
        (mousePositionX - ball.x) ** 2 + (mousePositionY - ball.y) ** 2
      );
      if (distance < ball.radius) {
        ball.color = "white";
      } else {
        ball.color = ball.originalColor;
      }
    });
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx * (speedSlider.value / speedSlider.max);
    this.y += this.dy * (speedSlider.value / speedSlider.max);

    this.draw();
  }

  stop() {
    this.dx = 0;
    this.dy = 0;
  }

  start() {
    this.dx = (Math.random() - 0.5) * 10;
    this.dy = (Math.random() - 0.5) * 10;
  }
}

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  if (balls.length === 0) {
    for (let i = 0; i < 20; i++) {
      const radius = Math.random() * 20 + 10;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * 20;
      const dy = (Math.random() - 0.5) * 20;
      const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`;

      const ball = new Ball(x, y, dx, dy, radius, color);
      ball.hover();
      balls.push(ball);
    }
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  balls.forEach(ball => {
    ball.update();
  });
}


stopButton.addEventListener("click", () => {
  balls.forEach(ball => {
    ball.stop();
  });
  speedSlider.value = speedSlider.min; 
});


startButton.addEventListener("click", () => {
  balls.forEach(ball => {
    ball.start();
  });
});

speedSlider.addEventListener("input", () => {
  speedLabel.textContent = speedSlider.value;
});

redButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});

greenButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});

blueButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});


init();
animate();
