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

       // continually rotate
    //flip *= 2;
   

    //Triangle
    fill(255);
    rotate( radians ( flip ) );
    triangle( tri.topX, tri.topX, tri.rightX, tri.rightY, tri.leftX, tri.leftY);
   
    //simple rotation 90 degrees
    flip = 91;
   
    //animate the rotation
    flip += random(360);

}
