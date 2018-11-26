// What happens when player touches an obstacle? They can't move forward.

let player_init_x = 50;
let player_init_y ;
let player;
let enemy;

//let enemies = [];
let enemy_init_x = 500;
let enemy_init_y;

function setup() {
    createCanvas(600, 600);
    player_init_y = abs( random(width) );
    enemy_init_y = abs ( random(height) );

    player = new Player(player_init_x, player_init_y);

    goal = new Goal();

    enemy = new Enemy(enemy_init_x, enemy_init_y, player.pos.x, player.pos.y);
}

function draw() {
    background(0);
    
    let target = createVector( player.pos.x, player.pos.y); // This creates the vector target that the enemy will seek. I didn't need an array to hold the pos.x,pos.x. I needed a vector.

    goal.displayPortal();

    player.display(); // displays the player on screen
    player.move(); // Allows the user to control the player with keyboard arrows
    player.inBounds(); // keeps the player inside the walls of the screen.

    reachedGoal();

    enemy.display(); // displays the enemy on screen
    enemy.seek(target); // This used the enemy's steeting to seek out the target
    enemy.update(); // This controls how the enemy moves: the velocity and acceleration

    gameOver();
}

function reachedGoal(){

    let d = dist(player.pos.x, player.pos.y, goal.x, goal.y);
    let combinedR = player.radius + goal.r;
    if (d <= combinedR){
        stroke(255)
        text('You win', width * .5, 50);
        noLoop();
    }
}

function gameOver(){

    let d = dist(enemy.position.x, enemy.position.y, player.pos.x, player.pos.y);
    let combinedR = enemy.r + player.radius;
    if (d <= combinedR){
        stroke(255)
        text('Game Over', width * .5, 50);
        noLoop();
    }
}

