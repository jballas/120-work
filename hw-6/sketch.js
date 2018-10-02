//global variables

//Javascript object, my triangle variables
var tri = {
    topX: 50,
    topY: 50,
    rightX: 60,
    rightY: 70,
    leftX: 40,
    leftY: 70
}

// Variable for movement
var moveX = 50;
var moveY = 50;

// Variable for rotation
var flip;

// setup fuction
function setup() {
    createCanvas(windowWidth, 400);
    background(0);
}

//draw function
function draw() {

    frameRate(20);

    // move the triangles using translate and restrict using modulo.
    translate(moveX, moveY);

    moveX += 50;
    moveY += 50;

    moveX %= width;
    moveY %= height;

    //simple rotation 90 degrees
    flip = 90;

    //animate the rotation
    flip -= random(360);

    //Triangle
    fill(255);
    rotate( radians ( flip ) );
    triangle( tri.topX, tri.topX, tri.rightX, tri.rightY, tri.leftX, tri.leftY);
   
    // Changed placement of triangle parameters, and limited them using math operations
    tri.topX += random();
    tri.topY += random();
    
    tri.topX %= 100;

    tri.leftX /= random( floor(5) );
    tri.leftY /= random( floor(5) );

    tri.rightX *= 3;
    tri.rightY *= 3;

    tri.rightX %= 100;
    tri.rightY %= 50;
    }    
