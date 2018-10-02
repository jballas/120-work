//global variables

//Javascript object
var tri = {
    topX: 50,
    topY: 50,
    rightX: 60,
    rightY: 70,
    leftX: 40,
    leftY: 70
}
var flip

// setup fuction
function setup() {
    createCanvas(windowWidth, 400);
    background(0);
}

//draw function
function draw() {

    //translate to middle of page
    translate(width * 0.5, height * 0.5 );

    //Triangle
    fill(255);
    rotate( radians ( flip ) );
    triangle( tri.topX, tri.topX, tri.rightX, tri.rightY, tri.leftX, tri.leftY);
   
    //simple rotation 90 degrees
    flip = 91;
   
    //animate the rotation
    flip += random(360);

    // move the triangle side to side

    
    // Changed placement of top triangle parameters, and limited it within 150 
    tri.topX += random();
    tri.topY += random();
    
    tri.topX %= 150;

    tri.leftX /= random( floor(5) );
    tri.leftY /= random( floor(5) );

    constrain( tri.rightX += 3, 0, width);
    constrain( tri.rightY += 3, 0, 500);

    tri.rightX %= 50;
    tri.rightY %= 50;
}    
