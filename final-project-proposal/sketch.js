// TODO: Make goal class into a seperate js file
// Find example of a code that targets a location that is constantly updating. Check the p5.js book as well as Dr. Musick's pacman and bubbles array: https://montana-media-arts.github.io/creative-coding-1/modules/week-12/objects-interacting/
// FIX the goal and player interactions. What happened?

let player_init_x = 50;
let player_init_y = 50;
let player ;
let enemies = [];

function setup() {
    createCanvas(600, 600);
    player = new Player(player_init_x, player_init_y);
    //player.push(p)

    goal = new Goal();

    let enemy = new Enemy(500, 100, player.xPos, player.yPos);
    enemies.push(enemy);

}

function draw() {
  background(0);
	
  goal.displayPortal();

 //   for (let i = 0; i < player.length; i ++){
//    }
player.display();
player.move();
player.inBounds();

    reachedGoal();   


    //enemy.display();

    let e = enemies[0];
    e.behaviors();
    e.update();
    e.show();

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

/*
class Enemy {

    constructor(){
        this.enemyX = 500;
        this.enemyY = 100;
        this.enemySize = 32;
    }

    display(){
        ellipse(this.enemyX, this.enemyY, this.enemySize);

    }
}
*/

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

