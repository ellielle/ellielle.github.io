export class Particle {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  screenHeight: number;
  screenWidth: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.screenWidth = canvasWidth;
    this.screenHeight = canvasHeight;
    this.x = Math.random() * this.screenWidth;
    this.y = Math.random() * this.screenHeight;
    this.radius = Math.random() * 2 + 1;
    this.speedX = this.randomizeSpeed(-1, 1);
    this.speedY = this.randomizeSpeed(1, 2);
  }

  private randomizeSpeed(minimum: number, maximum: number) {
    return minimum + Math.random() * (maximum - minimum + 1);
  }

  draw(ctx: CanvasRenderingContext2D) { 
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.y > this.screenHeight) {
      this.y = -10;
      this.x = Math.random() * this.screenWidth * 1.5;
    }
  }
}

