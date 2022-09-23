import appleImg from "./../images/apple.png";

class Apple {
  constructor(game) {
    this.game = game;
    this.width = this.game.size;
    this.height = this.game.size;
    this.image = new Image();
    this.image.src = appleImg;
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
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

export default Apple;
