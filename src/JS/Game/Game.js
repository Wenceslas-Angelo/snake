import Snake from "../Snake/Snake.js";

class Game {
  /**
   *
   * @param {Number} width
   * @param {Number} height
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.snake = new Snake(this);
  }

  update() {}

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    this.snake.draw(ctx);
  }
}

export default Game;
