export class Particle {
  screenWidth: number;
  screenHeight: number;
  angle: number;
  initialX: number;
  initialY: number;
  currentX: number;
  currentY: number;
  radius: number;
  sign: number;
  rotationRadius: number;
  increment: number;

  constructor(
    canvasWidth: number,
    canvasHeight: number,
    angle: number,
    sign: number,
    radius: number,
    rotationRadius: number,
    initialX: number,
    initialY: number
  ) {
    this.screenWidth = canvasWidth;
    this.screenHeight = canvasHeight;
    this.angle = angle;
    this.initialX = initialX;
    this.initialY = initialY;
    this.currentX = initialX;
    this.currentY = initialY;
    this.radius = radius;
    this.rotationRadius = rotationRadius;
    this.sign = sign;
    this.increment = 0.001;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "hsl(120, 100%, 50%)";
    ctx.beginPath();
    ctx.arc(this.currentX, this.currentY, this.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    // ctx.transform(1, 0.7, 0.4, 1, 0, 0);
  }

  update() {
    this.angle += this.increment;

    this.currentX = this.initialX + Math.cos(this.angle) * this.rotationRadius;
    this.currentY = this.initialY + Math.sin(this.angle) * this.rotationRadius;

    if (this.angle >= Math.PI * 2) {
      this.angle = 0;
      // this.increment = 0.01 + 0.1;
    }
  }
}
