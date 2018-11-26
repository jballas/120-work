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
    //enemies.push(enemy);
}

function draw() {
    background(0);
    
    // This creates the vector target that the enemy will seek. I didn't need an array to hold the pos.x,pos.x. I needed a vector. 
    let target = createVector( player.pos.x, player.pos.y);

    goal.displayPortal();

    player.display();
    player.move();
    player.inBounds();


    reachedGoal();   

    //let e = enemies[0];
    enemy.seek(target);
    enemy.update();
    enemy.display();

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

