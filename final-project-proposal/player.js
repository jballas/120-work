
// class for player, also known as Lucy. This is the initial sketch with a circle in place of Lucy. Later on I'll add a sprite for Lucy.
class Player {

    constructor(x,y){

        this.player_x = x;
        this.player_y = y;
        this.size = 50;
    }

    // Lucy sprite will go here

    display(){

        ellipse(this.player_x, this.player_y, this.size);
    }

    // Lucy's movement across the screen will be controlled by the user.
    move(){
        if (keyIsDown (LEFT_ARROW) ) {
            this.player_x -=5;
        } 
        if (keyIsDown(RIGHT_ARROW) ) {
            this.player_x += 5;
        } 
        if (keyIsDown (UP_ARROW) ) {
            this.player_y -=5;
        } 
        if (keyIsDown (DOWN_ARROW) ) {
            this.player_y +=5;
        }
    }

    // Prevents Lucy from moving off the screen. She will be inside a house, and can't move through walls, unlike the ghosts. 
    inBounds(){
        if (this.player_x <= 0) {
            this.player_x = 0;
        }
        if (this.player_y <= 0) {
            this.player_y = 0;
        }
        if (this.player_x >= width ) {
            this.player_x = width;
        }
        if (this.player_y >= height) {
            this.player_y = height;
        }
    }
}