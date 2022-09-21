class InputHandler {
  constructor(game) {
    this.game = game;
    this.key = {
      rightPressed: false,
      leftPressed: false,
      upPressed: false,
      downPressed: false,
    };

    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowRight":
          this.key.rightPressed = true;
          break;
        case "ArrowLeft":
          this.key.leftPressed = true;
          break;
        case "ArrowUp":
          this.key.upPressed = true;
          break;
        case "ArrowDown":
          this.key.downPressed = true;
          break;
      }
    });

    window.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "ArrowRight":
          this.key.rightPressed = false;
          break;
        case "ArrowLeft":
          this.key.leftPressed = false;
          break;
        case "ArrowUp":
          this.key.upPressed = false;
          break;
        case "ArrowDown":
          this.key.downPressed = false;
          break;
      }
    });
  }
}

export default InputHandler;
