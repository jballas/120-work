//Global Variables

//Circle location variables
let ball_x = 0;
let ball_y= 0;


//Setup function with canvas and background
function setup(){
    createCanvas(windowWidth, 600);
    background(0);
}

function draw(){

    if( ball_y >= 100 && ball_y <= 150){
        fill( abs(random(0, 255)), 100, 255);

    }else {
        fill('pink');
    }

    // create ball
    ellipse( ball_x, ball_y, 200, 200 );

    // Animate Circle
    ball_y += 10;

    ball_y %= 600;

    ball_x += 1;
    
    

}