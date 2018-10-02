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
// Variable for rotation
var flip

// setup fuction
function setup() {
    createCanvas(windowWidth, 400);
    background(0);
}

//draw function
function draw() {

    //frameRate(5);

    //translate to middle of page
    translate(width * 0.5, height * 0.5 );

    //simple rotation 90 degrees
    flip = 90;

    //animate the rotation
    flip -= random(360);

    //Triangle
    fill(255);
    rotate( radians ( flip ) );
    triangle( tri.topX, tri.topX, tri.rightX, tri.rightY, tri.leftX, tri.leftY);


    // move the triangle pattern from side to side. I really want the whole thing to drift side to side. Can I do that by containing it within another function? Like the translate? Or map?

    
    // Changed placement of triangle parameters, and limited them using math operations
    tri.topX += random();
    tri.topY += random();
    
    tri.topX %= 100;

    tri.leftX /= random( floor(5) );
    //tri.leftY /= random( floor(5) );

    tri.rightX *= 3;
    tri.rightY *= 3;

    tri.rightX %= 100;
    tri.rightY %= 50;
}    
