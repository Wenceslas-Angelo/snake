import Apple from "./Apple.js";
import Snake from "./Snake.js";

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
    this.apple = new Apple(this);
  }

  update() {
    //Move snake
    this.snake.update();
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    this.snake.draw(ctx);
    this.apple.draw(ctx);
  }
}

export default Game;
