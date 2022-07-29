const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// drawing shapes
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const images = {};
images.player = new Image();
images.player.src = "Pac-Men-General Sprites.png";
// to get frames get dimensions of sprite sheet, count the columns + divide by width
// for height count rows + divide by height of sprite sheet
const playerWidth = "53.8947368421";
const playerHeight = "53.8947368421";
// count x & y (frames on sprite sheet) axis to find the sprite you want to upload
let playerFrameX = 17;
let playerFrameY = 2;
// where i will be drawing my sprite on canvas
let playerX = 0;
let playerY = 0;
const playerSpeed = 6;

// make a function to be able to use for other sprites
function makeSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {}

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
  // displaying a virtual alert box
  alert("May The Odds Be Ever In Your Favor!");
}
