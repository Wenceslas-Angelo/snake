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
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.currentDirection = "";
    this.inputHandler = new InputHandler(this);
    this.canMoveX = true;
    this.canMoveY = true;
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

  setVelocity(x, y, canMoveX, canMoveY) {
    this.velocity.x = x;
    this.velocity.y = y;
    this.canMoveX = canMoveX;
    this.canMoveY = canMoveY;
  }

  moveHead() {
    const head = this.snakeParts[0];
    head.oldX = head.x;
    head.oldY = head.y;
    if (this.currentDirection === "right" && this.canMoveX) {
      this.setVelocity(1, 0, false, true);
    } else if (this.currentDirection === "left" && this.canMoveX) {
      this.setVelocity(-1, 0, false, true);
    } else if (this.currentDirection === "up" && this.canMoveY) {
      this.setVelocity(0, -1, true, false);
    } else if (this.currentDirection === "down" && this.canMoveY) {
      this.setVelocity(0, 1, true, false);
    }
    head.x += this.velocity.x * this.game.size;
    head.y += this.velocity.y * this.game.size;
    head.teleportIfOutOfMap(this.game);
  }

  calculateNewBlockPosition() {
    let { x, y } = this.snakeParts[this.snakePartsLength - 1];
    switch (this.currentDirection) {
      case "right":
        x -= 1;
        break;
      case "left":
        x += 1;
        break;
      case "up":
        y += 1;
        break;
      case "down":
        y -= 1;
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
