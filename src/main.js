import Game from "./JS/Game.js";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const FPS = 3;

canvas.width = 800;
canvas.height = 600;

const game = new Game(canvas.width, canvas.height);

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  game.update();
  game.draw(context);
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 1000 / FPS);
}

animate();
