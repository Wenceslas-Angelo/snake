class InputHandler {
  constructor(snake) {
    this.snake = snake;

    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowRight":
          this.snake.currentDirection = "right";
          break;
        case "ArrowLeft":
          this.snake.currentDirection = "left";
          break;
        case "ArrowUp":
          this.snake.currentDirection = "up";
          break;
        case "ArrowDown":
          this.snake.currentDirection = "down";
          break;
      }
    });
  }
}

export default InputHandler;
