/********* Fairy Doctor Runs Away game version 1.0 *********/
//Player variables
let player_init_x = 50;
let player_init_y ;
let player = [];

//Enemy variables
let fairies = [];
let howManyFairies = 5;
let enemy_init_x;
let enemy_init_y;

//Sound variables
let game_song;
let game_over_sound;
let game_clear;

//Image variables
let lillia_img;
let fairy_img;
let portal_img;

// Background variables
let bg_img;
let bg_main;
let canvas_w = 1024;
let canvas_h = 576;

//game start
let button;
let startingGame;

/********* Image and Sound *********/

function preload() {

    //Load images
    lillia_img = loadImage("./images/sprite-sheet-lillia.png");
    fairy_img = loadImage("./images/sprite-sheet-fairy-v2.png");
    portal_img = loadImage("./images/portal.png");
    bg_img = loadImage("./images/bg-game-v2.png");
    bg_mainpage = loadImage("./images/bg-mainpage.png");

    //Sound Effects and background music
    game_clear = loadSound("./sounds/SFX-clear.mp3");
    game_bg_music = loadSound("./sounds/game-music.mp3");
    game_over_sound = loadSound("./sounds/SFX-game-over.mp3");

}

/********* Setup *********/
function setup() {
    createCanvas(canvas_w, canvas_h);

    startingGame = 0;
    button = createButton("Start Game");
    button.mousePressed( startGame);
    

}

/********* Draw *********/
function draw() {

    if ( startingGame == 1) {
    
        background( bg_img );
        
        //Play the game's background music
        game_bg_music.playMode('untilDone');
        game_bg_music.setVolume(0.5);
        game_bg_music.play();
        

        let target = createVector( player[0].pos.x, player[0].pos.y); // This creates the vector target that the enemy will seek. I didn't need an array to hold the pos.x, pos.x. I needed a vector.

        goal.displayPortal();

        // Create player character
        for(let i = 0; i < player.length; i ++){
            player[i].frame();
        }

        //If you reach the goal you win.
        reachedGoal();

        // Enemy characters
        for (let i = 0; i < fairies.length; i++) {
            fairies[i].frame(target);
            fairies[i].avoidOthers(fairies, i);
        }
        // gameOver(); // I moved gameOver into the enemy.js file.
    
    }
    else if( startingGame == 2){
        creditsDisplay();
    }
    else if( startingGame == 0){

        startScreenDisplay();
        fairies = [];
    }

    
}

function reachedGoal(){

    let d = dist(player[0].pos.x, player[0].pos.y, goal.x, goal.y);
    let combinedR = player[0].radius + goal.r;
    if (d <= combinedR){

        //Stop the background music
        game_bg_music.stop();

        //Play the 'You win' Sound Effect
        game_clear.play();

        createP("Thank you for playing my game!");

        //noLoop();

        startingGame = 2;
    }
}


function startGame(){

    startingGame = 1;

    // Player's Y starting position is a random location
    player_init_y = abs( random(60, width/2) );


    player[0] = new Player(player_init_x, player_init_y, lillia_img);

    goal = new Goal();

    for (let i = 0; i < howManyFairies; i++){
        // Enemy position is random, but in the lower quadrant of the screen
        enemy_init_y = abs ( random(height/2, height) );
        enemy_init_x = abs ( random ( width / 2, width) );

        fairies.push( new Enemy(enemy_init_x, enemy_init_y, fairy_img) )
    }
}

function startScreenDisplay(){
    background (bg_mainpage);

}

function creditsDisplay(){

    let text_x = 0;
    let text_y = height;
    let t_size = width/8
    let t_size_sm = t_size /2;
    
    background(0);
    stroke(255)

    textSize(t_size_sm);
    text("You win", text_x /3, text_y/4);

    textSize(t_size)
    text("Fairy Doctor", text_x, text_y/2);

    textSize(t_size)
    text("Runs Away", text_x, text_y /1.25);


    createElement('h1', "About");

    createP("Fairy Doctor Runs Away is a p5.js game inspired by the fantasy series <em>Fairy Doctor Falls in Love</em> by Ava Clary.");

    createP("It is also the final project for my Media Arts Creative Coding 1 at the University of Montana."); 

    createP("The story is about Lillia, who has gotten herself into a sticky situation. She's on the run right now. She used to be a fairy doctor, but had to quit for various reason. Unfortunately, the fairies still want Lillia to be their doctor. Can she escape through the portal before they catch her?");

    createP(" Credits for songs and sound effects go to Shiftkun (https://freesound.org/s/435782/) and wolerado. (https://freesound.org/s/415096/.") ;

    noLoop();

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
