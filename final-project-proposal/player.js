class Player {

    constructor(x,y){

        this.player_x = x;
        this.player_y = y;
        this.size = 50;
    }

    display(){

        ellipse(this.player_x, this.player_y, this.size);
    }

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