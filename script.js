const canvas = document.getElementById("canvas");
const pacman = {
  x: 100,
  y: 100,
  w: 23,
  h: 23,
  up: false,
  down: false,
  left: false,
  right: false,
  color: "yellow",
  speed: 5,
  draw: function () {
    if (pacman.left) pacman.x -= pacman.speed;
    if (pacman.right) pacman.x += pacman.speed;
    if (pacman.up) pacman.y -= pacman.speed;
    if (pacman.down) pacman.y += pacman.speed;
  },
};

// create enemy object
const inky = {
  x: 100,
  y: 200,
  w: 20,
  h: 20,
  color: "red",
};

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
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // draw pacman
  drawCircle(pacman.x, pacman.y, pacman.w, pacman.color);
  pacman.x += 0;
  inky.x += 0;
  pacman.draw();
  drawCircle(inky.x, inky.y, inky.w, inky.color);

  // prevent pacman from going out of bounds
  if (pacman.x < 0) pacman.x = 0;
  if (pacman.x > canvas.width - pacman.w) pacman.x = canvas.width - pacman.w;
  // call the draw function again next frame
  window.requestAnimationFrame(draw);

  context.clearRect(0, 0, canvas.width, canvas.height);
}

// event listener for mario inputs
window.addEventListener("keydown", (e) => {
  // stop the event from bubbling  (stop the key presses from doing what they normally do)
  e.preventDefault();
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

// let img = new Image();
// img.src = 'blue-sprite.png'
// menu
// event listener
// when button is clicked
// hide menu
// start the game

const startButton = document.querySelector("#start-button");
const gameContainer = document.querySelector(".game-container");
const mainMenu = document.querySelector(".main-menu");

startButton.addEventListener("click", () => {
  // hide main-menu
  mainMenu.classList.add("hidden");
  // show game
  gameContainer.classList.remove("hidden");
  startPlaying();
});

function startPlaying() {
//  displaying a virtual alert box
 alert("May The Odds Be Ever In Your Favor!");
 }
