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
    this.velocity = this.speed;
  }

  update() {}

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Snake;
