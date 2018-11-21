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

    reachedGoal();   
}

function reachedGoal(){

    let d = dist( goal.x, goal.y, player.xPos, player.yPos)
    if (d < player.size + goal.size){
        stroke(255)
        text('You win', goal.x, goal.y);
        noLoop();
    }
}


class Goal {

    constructor(){
        this.size = width * .02;
        this.x = width * .5;
        this.y = height * .5;
    }

    displayPortal(){

        ellipse(this.x, this.y, this.size);
    }
    
}

