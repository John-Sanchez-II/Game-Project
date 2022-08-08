import {pacman} from "./Pacman.js"
import {inky} from "./Enemies.js"
import {fruit} from "./Collections.js"
import {collision,paused,setPaused} from "./Helper.js"


const canvas = document.getElementById("canvas");
// const score = document.querySelector('.score')


function update() {
  pacman.color = "yellow";
  fruit.color = "#00ff00";
  if (collision(pacman, fruit)) {
    pacman.color = "#ff1493";
    fruit.color = "#ff1493";
  }
}

const ctx = canvas.getContext("2d");
// draw on our canvas a circle at x and y
function drawCircle(x, y, radius, fill, stroke, strokeWidth) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill();
  }
  if (stroke) {
    ctx.lineWidth = strokeWidth;
    ctx.strokeStyle = stroke;
    ctx.stroke();
  }
}



// clear the canvas and redraw the game objects for every frame
function draw() {

  if(paused) return
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // draw pacman
  drawCircle(pacman.x, pacman.y, pacman.w, pacman.color);
  pacman.x += 0;
  inky.x += 0;
  fruit.x += 0;
  // draw enemy
  pacman.move();
  // change update name
  update();
  drawCircle(inky.x, inky.y, inky.w, inky.color);
  inky.moveTowardsPlayer();

  // draw fruit
  drawCircle(fruit.x, fruit.y, fruit.w, fruit.color);
  // prevent pacman from going out of bounds
  if (pacman.x <= 0) pacman.x = 0;
  if (pacman.x > canvas.width - pacman.w) pacman.x = canvas.width - pacman.w;
  if (pacman.y <= 0) pacman.y = 0;
  if (pacman.y > canvas.height - pacman.h) pacman.y = canvas.height - pacman.y;

  // keep enemy in canvas
  if (inky.x <= 0) inky.x = 0;
  if (inky.x > canvas.width - inky.w) inky.x = canvas.width - inky.w;
  if (inky.y <= 0) inky.y = 0;
  if (inky.y > canvas.height - inky.h) inky.y = canvas.height - inky.h;
  //
  // if (fruit.x <= 0) fruit.x = 0;
  // if (fruit.x > canvas.width - fruit.w) fruit.x = canvas.width - fruit.w;
  // if (fruit.y <= 0) fruit.y = 0;
  // if (fruit.y > canvas.height - fruit.h) fruit.y = canvas.height - fruit.h;

  // call the draw function again next frame
  window.requestAnimationFrame(draw);
}

// event listener for pacman inputs
window.addEventListener("keydown", (e) => {
  // stop the event from bubbling  (stop the key presses from doing what they normally do)
  e.preventDefault();
  console.log(e.key);
  // if arrow key is pressed move marios relative cardinal direction
  if (e.key === "ArrowUp") {
    pacman.up = true;
  }
  if (e.key === "ArrowDown") {
    pacman.down = true;
  }
  if (e.key === "ArrowLeft") {
    pacman.left = true;
  }
  if (e.key === "ArrowRight") {
    pacman.right = true;
  }
});

// event listener for pacman inputs
window.addEventListener("keyup", (e) => {
  // stop the event from bubbling  (stop the key presses from doing what they normally do)
  e.preventDefault();
  // if arrow key is pressed move marios relative cardinal direction
  if (e.key === "ArrowUp") {
    pacman.up = false;
  }
  if (e.key === "ArrowDown") {
    pacman.down = false;
  }
  if (e.key === "ArrowLeft") {
    pacman.left = false;
  }
  if (e.key === "ArrowRight") {
    pacman.right = false;
  }
});

draw();
// getDistance();
// collision();

const gameContainer = document.querySelector(".game-play");
const mainMenu = document.querySelector(".front-page");
const start = document.getElementById("start-B");
// call the draw function again next frame
// window.requestAnimationFrame(draw)

// hide main-menu
// event listener
start.addEventListener("click", () => {
  mainMenu.classList.add("hidden");
  // show game
  gameContainer.classList.remove("hidden");
  // START THE GAME 
  setPaused(false)
  draw()
});
