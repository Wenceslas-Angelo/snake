import Apple from "./Apple.js";
import Snake from "./Snake.js";
import ground01 from "./../images/ground_01.png";
import ground02 from "./../images/ground_05.png";
import ground03 from "./../images/ground_06.png";

class Game {
  /**
   *
   * @param {Number} width
   * @param {Number} height
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.groundImage = new Image();
    this.changeGround();
    this.size = 40;
    this.snake = new Snake(this);
    this.apple = new Apple(this);
    this.FPS = 2;
    this.gameOver = false;
    this.score = 0;
    this.scoreTxt = document.querySelector(".score");
  }

  changeGround() {
    const groundsImg = [ground01, ground02, ground03];
    const index = Math.floor(Math.random() * groundsImg.length);
    this.groundImage.src = groundsImg[index];
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
        ctx.drawImage(
          this.groundImage,
          i * this.size,
          j * this.size,
          this.size,
          this.size
        );
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
    if (this.gameOver) {
      ctx.font = "100px sans-serif";
      ctx.fillText("GAME OVER", 100, this.height / 2);
    }
  }
}

export default Game;
