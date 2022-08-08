export function getDistance(obj1,obj2) {
  let a = obj1.y - obj2.y;
  let b = obj1.x - obj2.x;
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

export function collision(obj1,obj2) {
  // let radii = pacman.radius + fruit.radius;
  let distance = getDistance(obj1,obj2);
  return distance < obj1.w;
}

export let paused = true
export function setPaused(value){
    paused=value
}