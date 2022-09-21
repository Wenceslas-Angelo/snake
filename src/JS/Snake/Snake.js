class Snake {
  /**
   *
   * @param {Object} game
   */
  constructor(game) {
    this.game = game;
    this.x = 10;
    this.y = 10;
    this.width = 50;
    this.height = 50;
    this.speed = 2;
    this.xVelocity = 0;
    this.yVelocity = 0;
  }

  update() {
    this.x += this.xVelocity;
    this.y += this.yVelocity;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  /**
   *
   * @param {String} direction
   */
  move(direction) {
    if (direction === "right") {
      this.xVelocity = this.speed;
      this.yVelocity = 0;
    } else if (direction === "left") {
      this.xVelocity = -this.speed;
      this.yVelocity = 0;
    } else if (direction === "up") {
      this.yVelocity = -this.speed;
      this.xVelocity = 0;
    } else if (direction === "down") {
      this.yVelocity = this.speed;
      this.xVelocity = 0;
    }
  }
}

export default Snake;
