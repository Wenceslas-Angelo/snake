import Apple from "./Apple.js";
import InputHandler from "./InputHandler.js";
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
    this.gameOver = false;

    this.snake = new Snake(this);
    this.inputHandler = new InputHandler(this);
    this.apple = new Apple(this);
  }

  update() {
    const snakeIsUpdatableX =
      this.snake.x + this.snake.width <= this.width && this.snake.x >= 0;
    const snakeUIsUpdatableY =
      this.snake.y >= 0 && this.snake.y + this.snake.height <= this.height;
    if (snakeIsUpdatableX && snakeUIsUpdatableY) {
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

      if (Game.checkCollision(this.snake, this.apple)) {
        this.apple.update();
      }
    } else {
      this.gameOver = true;
    }
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    this.snake.draw(ctx);
    this.apple.draw(ctx);
  }

  /**
   *
   * @param {{x:number, y:number, width: number, height: number}} rect1
   * @param {{x:number, y:number, width: number, height: number}} rect2
   * @returns Boolean
   */
  static checkCollision(rect1, rect2) {
    const collideXOne = rect1.x < rect2.x + rect2.width;
    const collideXTwo = rect1.x + rect1.width > rect2.x;
    const collideYOne = rect1.y < rect2.y + rect2.height;
    const collideYTwo = rect1.height + rect1.y > rect2.y;
    const rectIsCollide =
      collideXOne && collideXTwo && collideYOne && collideYTwo;
    return rectIsCollide;
  }
}

export default Game;
