/********* Fairy Doctor Runs Away game version 1.0 *********/
//Player variables
let player_init_x = 50;
let player_init_y ;
let player = [];
let lillia;

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

//game start and game Screens
let button;
let gameScreen;
let volume = 0.25;
let loadingTime = 800;

/********* Image and Sound *********/

function preload() {

    //Load images
    lillia_img = loadImage( "sprite-sheet-Lillia.png" );
    fairy_img = loadImage( "./images/sprite-sheet-fairy-v2.png" );
    portal_img = loadImage( "./images/portal.png" );
    bg_img = loadImage( "./images/bg-game-v2.png" );

    //Sound Effects and background music
    game_clear = loadSound( "SFX-clear.mp3" );
    game_bg_music = loadSound( "game-music.mp3" );
    game_over_sound = loadSound( "SFX-game-over.mp3" );

    // Font
    fontScript = loadFont( 'Playlist-Script.otf' );
}

/********* Setup *********/
function setup() {
    createCanvas( canvas_w, canvas_h );

    gameScreen = 0;
    button = createButton( "Start Game" );
    button.mousePressed( startGame );
    
    button = createButton( "Mute" );
    button.mousePressed( volumeControl );

}

/********* Draw *********/
function draw() {

    // Game starts on main start screen. 
    if( gameScreen == 0 ){

        startScreenDisplay();
        fairies = [];
    } 

    // Otherwise if the button is pressed, then you see the game start screen.
    else if ( gameScreen == 1 ) {
    
        background( bg_img );
        
        //Play the game's background music
        game_bg_music.playMode( 'untilDone');
        game_bg_music.setVolume( volume );
        game_bg_music.play();
        

        let target = createVector( player[0].pos.x, player[0].pos.y ); // This creates the vector target that the enemy will seek. I didn't need an array to hold the pos.x, pos.x. I needed a vector.

        goal.displayPortal();

        // Create and display player sprite
        for(let i = 0; i < player.length; i ++){
            player[0].display();
            setTimeout( loadingPlayer, loadingTime );
        }

        // If you reach the goal you win.
        reachedGoal();

        // Display the Enemy sprites
        for (let i = 0; i < fairies.length; i++) {
            fairies[i].display();
            setTimeout( loadingEnemies, loadingTime, target, fairies, i );
            
        // If the enemies catch you it's game over.
        gameOver(i); 
        }
        
        
    }
    // When you win the game, then the credit's page appears. You can still play the game if you click the start button.
    else if( gameScreen == 2 ){
        creditsDisplay();
    }

}

/********* Loading Timer Functions *********/

// These functions used to be in the main sketch, but the setTimeout function wouldn't work unless I created these new functions to callback. Then I had to discover where to put the parameters.

function loadingPlayer(){
    player[0].frame();
}

function loadingEnemies( target, fairies, i ){
    fairies[i].frame( target );
    fairies[i].avoidOthers( fairies, i );
}

/********* Main Page screen *********/
function startScreenDisplay(){

    let text_x = 0;
    let text_y = height;
    let t_size = width/8
    let t_size_sm = t_size /2;
    let t_size_tiny = t_size_sm/2;
    lillia_loc_x = width * 0.10;
    lillia_loc_y = height /2;

    background(0);
    fill(255)

    push();
        textFont( fontScript );
        textSize( t_size );
        text("Fairy Doctor", text_x, text_y/4 );
        text("Runs Away", text_x, text_y /2 );
    pop();

    textSize( t_size_tiny );
    text( "Control with WASD or Arrow keys", text_x, text_y/1.25 );
    text( "Escape through the portal before the fairies catch you!", text_x, height - 50 );

    lillia = new Player( lillia_loc_x, lillia_loc_y, lillia_img );
    lillia.display();

}

/********* Game Starts Function *********/
function startGame(){

    // Player's Y starting position is a random location
    player_init_y = abs( random( 60, width/2 ) );

    // Create player
    player[0] = new Player( player_init_x, player_init_y, lillia_img );

    // Create Goal
    goal = new Goal();

    // Create Enemies
    for (let i = 0; i < howManyFairies; i++){
        // Enemy position is random, but in the lower quadrant of the screen
        enemy_init_y = abs ( random( height/2, height ) );
        enemy_init_x = abs ( random( width / 2, width ) );

        fairies.push( new Enemy( enemy_init_x, enemy_init_y, fairy_img ) )
    }

    // Set the game Screen so in draw() function it will display the correct screen
    gameScreen = 1;
}

/********* You LOSE the Game  *********/
function gameOver(i){

    let d = dist(fairies[i].position.x, fairies[i].position.y, player[0].pos.x, player[0].pos.y);
    let combinedR = fairies[i].r + player[0].radius;
    if (d <= combinedR){


        
        //Stop the game background music
        game_bg_music.stop();

        // Play the Game Over sound       
        game_over_sound.setVolume( volume );
        game_over_sound.play();

        stroke(255);
        textSize(50);
        text( 'Game Over', width * 0.5, height * 0.5 );
        //noLoop();

        // set Game screen to starting screen
        gameScreen = 0;
        

    }
}

/********* You WIN the Game  *********/
function reachedGoal(){

    let d = dist(player[0].pos.x, player[0].pos.y, goal.x, goal.y);
    let combinedR = player[0].radius + goal.r;
    if (d <= combinedR){

        //Stop the background music
        game_bg_music.stop();

        //Play the 'You win' Sound Effect               
        game_clear.setVolume( volume );
        game_clear.play();

        gameScreen = 2;
    }
}

/********* Credits *********/
function creditsDisplay(){

    let text_x = 0;
    let text_y = height;
    let t_size = width/8
    let t_size_sm = t_size /2;
    let t_size_tiny = t_size_sm/4;
    let thanks = "Thank you for playing my game!";
    let about = "ABOUT: Fairy Doctor Runs Away is a p5.js game inspired by the fantasy series Fairy Doctor Falls in Love by Ava Clary. It is also the final project for my Media Arts Creative Coding 1 at the University of Montana. Credits for songs and sound effects go to Shiftkun (https://freesound.org/s/435782/) and wolerado (https://freesound.org/s/415096/). "
    
    background(255);
    fill(0)

    textSize( t_size );
    text( "You win", text_x, text_y/4 );

    push();
        textFont( fontScript );
        textSize( t_size_sm );
        text( "Fairy Doctor Runs Away", text_x, text_y/2 );
    pop();

    textSize( t_size_tiny );
    text( thanks, text_x, text_y-200 );
    text( about, text_x, height - 150, 500, 500 );

}

/********* Mute button *********/
function volumeControl(){

    if (volume === 0.25){
        volume = 0;
    } else{
        volume = 0.25;
    }

}
