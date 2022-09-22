class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.oldX = x;
    this.oldY = y;
    this.width = 20;
    this.height = 20;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  teleportIfOutOfMap(game) {
    if (this.x < 0) {
      this.x = game.width;
    } else if (this.x > game.width) {
      this.x = 0;
    } else if (this.y < 0) {
      this.y = game.height;
    } else if (this.y > game.height) {
      this.y = 0;
    }
  }

  setPosition(x, y) {
    this.oldX = this.x;
    this.oldY = this.y;
    this.x = x;
    this.y = y;
  }
}

export default SnakePart;
