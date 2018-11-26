// Find example of a code that targets a location that is constantly updating. 

let player_init_x = 50;
let player_init_y = 50;

let enemies = [];

function setup() {
    createCanvas(600, 600);
    player = new Player(player_init_x, player_init_y);

    goal = new Goal();

    let enemy = new Enemy(500, 100, player.xPos, player.yPos);
    enemies.push(enemy);
}

function draw() {
    background(0);
    
    // This creates the vector target that the enemy will seek. I didn't need an array to hold the xPos,xPos. I need a vector. 
    let target = createVector( player.xPos, player.yPos);

    goal.displayPortal();

    player.display();
    player.move();
    player.inBounds();

    reachedGoal();   

    let e = enemies[0];
    e.seek(target);
    e.update();
    e.display();

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


