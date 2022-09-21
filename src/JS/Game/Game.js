import InputHandler from "../InputHandler/InputHandler.js";
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
    this.inputHandler = new InputHandler(this);
  }

  update() {
    if (this.inputHandler.key.rightPressed) {
      this.snake.move("right");
    } else if (this.inputHandler.key.leftPressed) {
      this.snake.move("left");
    } else if (this.inputHandler.key.upPressed) {
      this.snake.move("up");
    } else if (this.inputHandler.key.downPressed) {
      this.snake.move("down");
    }
    this.snake.update();
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    this.snake.draw(ctx);
  }
}

export default Game;
