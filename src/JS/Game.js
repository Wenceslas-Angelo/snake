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
    this.size = 40;
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
  drawGrid(ctx) {
    const row = Math.floor(this.width / this.size);
    const column = Math.floor(this.height / this.size);
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.strokeRect(i * this.size, j * this.size, this.size, this.size);
      }
    }
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    this.drawGrid(ctx);
    this.snake.draw(ctx);
    this.apple.draw(ctx);
  }
}

export default Game;
