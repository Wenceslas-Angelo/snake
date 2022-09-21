class Snake {
  /**
   *
   * @param {Object} game
   */
  constructor(game) {
    this.game = game;
    this.x = 10;
    this.y = 10;
    this.width = 20;
    this.height = 20;
    this.speed = 2;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.xMove = true;
    this.yMove = true;
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
    if (direction === "right" && this.xMove) {
      this.xVelocity = this.speed;
      this.yVelocity = 0;
      this.xMove = false;
      this.yMove = true;
    } else if (direction === "left" && this.xMove) {
      this.xVelocity = -this.speed;
      this.yVelocity = 0;
      this.xMove = false;
      this.yMove = true;
    } else if (direction === "up" && this.yMove) {
      this.yVelocity = -this.speed;
      this.xVelocity = 0;
      this.xMove = true;
      this.yMove = false;
    } else if (direction === "down" && this.yMove) {
      this.yVelocity = this.speed;
      this.xVelocity = 0;
      this.xMove = true;
      this.yMove = false;
    }
  }
}

export default Snake;
