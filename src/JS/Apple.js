class Apple {
  constructor(game) {
    this.game = game;
    this.width = 30;
    this.height = 30;
    this.x = this.game.width / 2;
    this.y = this.game.height / 2;
  }

  update() {
    this.x = Math.floor(Math.random() * this.game.width - this.width);
    this.y = Math.floor(Math.random() * this.game.height - this.height);
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Apple;
