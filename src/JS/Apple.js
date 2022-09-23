class Apple {
  constructor(game) {
    this.game = game;
    this.width = 20;
    this.height = 20;
    this.x = 0;
    this.y = 0;
    this.update();
  }

  update() {
    this.x =
      Math.floor(Math.random() * (this.game.width / this.game.size)) *
      this.game.size;
    this.y =
      Math.floor(Math.random() * (this.game.height / this.game.size)) *
      this.game.size;
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
