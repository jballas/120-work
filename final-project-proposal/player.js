
// class for player, also known as Lucy. This is the initial sketch with a circle in place of Lucy. Later on I'll add a sprite for Lucy.
class Player {

    constructor(x,y){

        this.pos = {
            x,
            y
        }
        this.size = 50;
        //this controls how fast the player moves
        this.speed = 5;
        // This controls how close you have to be to reach the goal.
        this.radius = this.size/ 2.5;
    }

    // Lucy sprite will go here

    display(){

        ellipse(this.pos.x, this.pos.y, this.size);
    }

    // Lucy's movement across the screen will be controlled by the user.
    move(){
        if (keyIsDown (LEFT_ARROW) ) {
            this.pos.x -= this.speed;
        } 
        if (keyIsDown(RIGHT_ARROW) ) {
            this.pos.x += this.speed;
        } 
        if (keyIsDown (UP_ARROW) ) {
            this.pos.y -= this.speed;
        } 
        if (keyIsDown (DOWN_ARROW) ) {
            this.pos.y += this.speed;
        }
    }

    // Prevents Lucy from moving off the screen. She will be inside a house, and can't move through walls, unlike the ghosts. 
    inBounds(){
        if (this.pos.x <= 0) {
            this.pos.x = 0;
        }
        if (this.pos.y <= 0) {
            this.pos.y = 0;
        }
        if (this.pos.x >= width ) {
            this.pos.x = width;
        }
        if (this.pos.y >= height) {
            this.pos.y = height;
        }
    }
}