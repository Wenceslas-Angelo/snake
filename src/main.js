import Game from "./JS/Game.js";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

const game = new Game(canvas.width, canvas.height);

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (!game.gameOver) {
    game.update();
  }
  game.draw(context);
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 1000 / game.FPS);
}

animate();
