
// class for player, also known as Lucy. This is the initial sketch with a circle in place of Lucy. Later on I'll add a sprite for Lucy.
class Player {

    constructor(x,y){

        this.xPos = x;
        this.yPos = y;
        this.size = 50;
        //this controls how fast the player moves
        this.speed = 5;
        // This controls how close you have to be to reach the goal.
        this.radius = this.size/ 2.5;
    }

    // Lucy sprite will go here

    display(){

        ellipse(this.xPos, this.yPos, this.size);
    }

    // Lucy's movement across the screen will be controlled by the user.
    move(){
        if (keyIsDown (LEFT_ARROW) ) {
            this.xPos -= this.speed;
        } 
        if (keyIsDown(RIGHT_ARROW) ) {
            this.xPos += this.speed;
        } 
        if (keyIsDown (UP_ARROW) ) {
            this.yPos -= this.speed;
        } 
        if (keyIsDown (DOWN_ARROW) ) {
            this.yPos += this.speed;
        }
    }

    // Prevents Lucy from moving off the screen. She will be inside a house, and can't move through walls, unlike the ghosts. 
    inBounds(){
        if (this.xPos <= 0) {
            this.xPos = 0;
        }
        if (this.yPos <= 0) {
            this.yPos = 0;
        }
        if (this.xPos >= width ) {
            this.xPos = width;
        }
        if (this.yPos >= height) {
            this.yPos = height;
        }
    }
}