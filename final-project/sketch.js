
//Player variables
let player_init_x = 50;
let player_init_y ;
let player = [];

//Enemy variables
let enemy;
let fairies = [];
let howMany = 5;
let enemy_init_x;
let enemy_init_y;

//Sound variables
let game_song;
let game_over_sound;
let sparkle_sound;
let game_clear;

//Image variables
let lillia_img;
let fairy_img;
let portal_img;

// Background variable
let bg_img;
let bg_main

function preload() {
    lillia_img = loadImage('./images/sprite-sheet-lillia.png');
    fairy_img = loadImage('./images/sprite-sheet-fairy-blue.png');
    portal_img = loadImage('./images/portal.png');
    bg_img = loadImage('./images/bg-tropical.png');
    bg_main = loadImage('./images/bg-mainpage.png');

    //Sound Effects and background music
    game_clear = loadSound('./sounds/SFX-clear.mp3');
    game_bg_music = loadSound('./sounds/game-music.mp3');
    game_over_sound = loadSound('./sounds/SFX-game-over.mp3');
    sparkle_sound = loadSound('./sounds/SFX-sparkle.mp3');

}

function setup() {
    createCanvas(1024, 576);



    //Play the game's background music
    game_bg_music.setVolume(0.5);
    game_bg_music.play();

    
    player_init_y = abs( random(50, width/2) );
    
    player[0] = new Player(player_init_x, player_init_y, lillia_img);

    goal = new Goal();


    for (let i = 0; i < howMany; i++){
        enemy_init_y = abs ( random(height/2, height) );
        enemy_init_x = abs ( random ( width / 2, width) );

        fairies.push( new Enemy(enemy_init_x, enemy_init_y, player[0].pos.x, player[0].pos.y) )
    }
}

function draw() {
    background( bg_img );
    
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

        //Stop the background music
        game_bg_music.stop();

        //Play the You win Sound Effects
        game_clear.play();
        //sparkle_sound.play();

        console.log(player.radius);

        stroke(255)
        textSize(50);
        text('You win', width * 0.5, height * 0.5);
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
