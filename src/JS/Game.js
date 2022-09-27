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

    document.addEventListener("keydown", (event) => {
      if (this.gameOver && event.key === " ") {
        this.restartGame();
      }
    });
  }

  changeGround() {
    const groundsImg = [ground01, ground02, ground03];
    const index = Math.floor(Math.random() * groundsImg.length);
    this.groundImage.src = groundsImg[index];
  }

  restartGame() {
    this.gameOver = false;
    this.score = 0;
    this.FPS = 2;
    this.changeGround();
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
    ctx.fillStyle = "gray";
    ctx.font = "100px sans-serif";
    ctx.fillText(`SCORE : ${this.score}`, 150, 100);
    this.snake.draw(ctx);
    this.apple.draw(ctx);

    if (this.gameOver) {
      ctx.fillText("GAME OVER", 100, this.height / 2);
      ctx.font = "50px sans-serif";
      ctx.fillText("TAP BACK SPACE TO RESTART", 20, this.height / 2 + 200);
    }
  }
}

export default Game;
