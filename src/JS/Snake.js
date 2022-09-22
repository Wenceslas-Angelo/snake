import SnakePart from "./SnakePart";
import InputHandler from "./InputHandler";
import checkCollision from "./checkCollision";

class Snake {
  /**
   *
   * @param {Object} game
   */
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.snakeParts = [];
    this.snakePartsLength = 0;
    this.width = 20;
    this.height = 20;
    this.addSnakePart(this.x, this.y);
    this.speed = 5;
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.currentDirection = "";
    this.inputHandler = new InputHandler(this);
  }

  addSnakePart(x, y) {
    const snakePart = new SnakePart(x, y);
    this.snakeParts.push(snakePart);
    this.snakePartsLength += 1;
  }

  update() {
    this.moveHead();
    this.eatApple();
  }

  moveHead() {
    const head = this.snakeParts[0];
    head.oldX = head.x;
    head.oldY = head.y;
    switch (this.currentDirection) {
      case "right":
        head.x += this.speed;
        break;
      case "left":
        head.x -= this.speed;
        break;
      case "up":
        head.y -= this.speed;
        break;
      case "down":
        head.y += this.speed;
        break;
    }

    head.teleportIfOutOfMap(this.game);
  }

  calculateNewBlockPosition() {
    let { x, y } = this.snakeParts[this.snakePartsLength - 1];

    switch (this.currentDirection) {
      case "right":
        x -= 10;
        break;
      case "left":
        x += 10;
        break;
      case "up":
        y += 10;
        break;
      case "down":
        y -= 10;
        break;
    }

    return { x, y };
  }

  eatApple() {
    const head = this.snakeParts[0];
    if (checkCollision(head, this.game.apple)) {
      this.game.apple.update();
      const { x, y } = this.calculateNewBlockPosition();
      this.addSnakePart(x, y);
      console.log(this.snakeParts);
    }
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    this.snakeParts.forEach((snakePart, index) => {
      if (index > 0) {
        const { oldX, oldY } = this.snakeParts[index - 1];
        snakePart.setPosition(oldX, oldY);
      }

      snakePart.draw(ctx);
    });
  }
}

export default Snake;
