// Instead of a gameover, what if they enemies touching you adds up a score and the more you can avoid the better your score is.
// Having obstacles, would still be good, if I can figure those out.

let player_init_x = 50;
let player_init_y ;
let player = [];
let enemy;

let fairies = [];
let howMany = 5;
let enemy_init_x;
let enemy_init_y;

function preload() {
    lillia_img = loadImage('./images/sprite-sheet-lillia.png');
}

function setup() {
    createCanvas(1024, 576);
    player_init_y = abs( random(0, width/2) );
    
    player[0] = new Player(player_init_x, player_init_y, lillia_img);

    goal = new Goal();


    for (let i = 0; i < howMany; i++){
        enemy_init_y = abs ( random(height/2, height) );
        enemy_init_x = abs ( random ( width / 2, width) );

        fairies.push( new Enemy(enemy_init_x, enemy_init_y, player[0].pos.x, player[0].pos.y) )
    }
}

function draw() {
    background(255);
    
    let target = createVector( player[0].pos.x, player[0].pos.y); // This creates the vector target that the enemy will seek. I didn't need an array to hold the pos.x,pos.x. I needed a vector.

    goal.displayPortal();

    for(let i = 0; i < player.length; i ++){
        player[i].frame();
    }
    reachedGoal();

    for (let i = 0; i < fairies.length; i++) {
        fairies[i].display(); // displays the fairies[i] on screen
        fairies[i].seek(target); // This used the enemy's steeting to seek out the target
        fairies[i].update(); // This controls how the enemy moves: the velocity and acceleration
        //fairies[i].gameOver();
        fairies[i].avoidOthers(fairies, i);
    }
   // gameOver();
}

function reachedGoal(){

    let d = dist(player[0].pos.x, player[0].pos.y, goal.x, goal.y);
    let combinedR = player[0].radius + goal.r;
    if (d <= combinedR){
        stroke(255)
        text('You win', width * .5, 50);
        noLoop();
    }
}

/* // I moved this feature to the Enemy.js file
function gameOver(){

    let d = dist(this.position.x, this.position.y, player.pos.x, player.pos.y);
    let combinedR = this.r + player.radius;
    if (d <= combinedR){
        stroke(255)
        text('Game Over', width * .5, 50);
        noLoop();
    }
}
*/
