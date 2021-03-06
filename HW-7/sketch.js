

let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

var colBlack = 255;

function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;   
    }
  
    
    // With a variable in the fill, I can change it
    fill( colBlack );
    // New shape, instead of a ball I made it a line.b
    line(ball.x, ball.y, ball.width, ball.width);

    //If the shape is within certain variables the colors will change to  black, white or gray. Having a stroke makes for interesting patterns.
    if (ball.x >= 100 && ball.x <= 200) {
        stroke(255);
        colBlack = 0;
    } else if ( ball.x >= 200 && ball.x <= 300) {
        stroke(255);
        colBlack = 100;
    }else {
        stroke(0);
        colBlack = 255;
    }

    // Added instructions for the reset
    push();
        textSize(15);
        stroke(200);
        fill(100);
        text('Click any key to reset', 400, 390);
        text('Click mouse for speed', 200, 390);
    pop();

    // to reset the background color, press any key
if (keyIsPressed === true) {
    background (255);
}

}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, .05, 10);
}
