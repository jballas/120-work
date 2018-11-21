// TODO: Make goal class into a seperate js file
// Make Enemy Class
// Review Dan Shiffman's Steering video

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

    let d = dist(player.xPos, player.yPos, goal.x, goal.y)
    let combinedR = player.radius + goal.r;
    if (d <= combinedR){
        stroke(255)
        text('You win', width * .5, 50);
        noLoop();
    }
}


class Goal {

    constructor(){
        this.size = width * .1;
        // this controls how close to have to be to reach the goal
        this.r = this.size / 2.5;
        this.x = width * .5;
        this.y = height * .5;
    }

    displayPortal(){

        ellipse(this.x, this.y, this.size);
    }

}

