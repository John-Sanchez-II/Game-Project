import { collision, setPaused } from "./Helper.js"
import { pacman } from "./Pacman.js"
// create enemy object / will need 3 or 4 sprites total
export const inky = {
    x: 500,
    y: 200,
    w: 20,
    h: 20,
    color: "red",
    speed: 2,
    moveTowardsPlayer: function (){
      // lock onto pacman and move towards his direction
      if(this.x>pacman.x){
        this.x -= this.speed * pacman.direction
      }
      if(this.y>pacman.y){
        this.y -= this.speed * pacman.direction
      }
      if(this.x<pacman.x){
        this.x += this.speed * pacman.direction
      }
      if(this.y<pacman.y){
        this.y += this.speed * pacman.direction
      }
      if(collision(pacman,this)){
        setPaused(true)
        alert("game Over")
       
      }
    }

}