let player_init_x = 50;
let player_init_y = 50;
let player;

function setup() {
    createCanvas(400, 400);
    player = new Player(player_init_x, player_init_y);
    goal = new Goal();
}

function draw() {
  background(0);
	

    goal.displayPortal();

    player.display();
    player.move();
    player.inBounds();

    
}


class Goal {

    constructor(){
        this.size = width * .25;
        this.x = width * .5;
        this.y = height * .5;
    }

    displayPortal(){

        ellipse(this.x, this.y, this.size);
    }
    
}
