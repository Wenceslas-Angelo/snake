class SnakePart {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.oldX = x;
    this.oldY = y;
    this.width = size;
    this.height = size;
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
      this.x = game.width - game.size;
    } else if (this.x >= game.width) {
      this.x = 0;
    } else if (this.y < 0) {
      this.y = game.height - game.size;
    } else if (this.y >= game.height) {
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
