let player_init_x = 50;
let player_init_y = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
	
    let player = new Player(player_init_x, player_init_y);
    
    player.display();
    player.move();
    player.inBounds();
}


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