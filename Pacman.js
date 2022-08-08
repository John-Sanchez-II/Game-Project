// replace with 3 playable characters
export const pacman = {
    x: 600,
    y: 400,
    w: 23,
    h: 23,
    up: false,
    down: false,
    left: false,
    right: false,
    color: "yellow",
    speed: 9,
    direction: 1,
    move: function () {
      if (pacman.left) pacman.x -= pacman.speed;
      if (pacman.right) pacman.x += pacman.speed;
      if (pacman.up) pacman.y -= pacman.speed;
      if (pacman.down) pacman.y += pacman.speed;
    },
  };

  window.pacman=pacman

  // sound for pacman moving
// const pacManSFX = new Audio ('pacman_chomp.wav')
