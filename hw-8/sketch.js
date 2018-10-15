function setup() {
    createCanvas( windowWidth, 600);
}

// Variables for triangle
let left_x = 5;
let left_y = 200;
let right_x = 50;
let right_y = 200;

// Variables for movement
let angle = 1;
let speed = 1;

function draw(){

background(0);

//Color variable
let c_Value = color(255, 200, 0);

frameRate(3);


// _For loop_ with variable flower_x that adjusts
for (let flower_x = 25; flower_x < width; flower_x ++ ) {

    // create a triangle that rotates
    translate(width * .25, width * .25);
    fill( c_Value );
    rotate ( angle);
    triangle( flower_x, flower_x + 75, right_x, right_y , left_x, left_y);
}

//Animation
if(left_x >= 50 || left_x < 0 ) {
    speed = speed * -1;
}

left_x = left_x + speed;

angle ++;
angle % 360;


/* This was my original code I started with. It was a rotating triangle, then when I applied the _for loop _ it changed completely.
push();

    translate(width * .5, width * .5);
    fill( c_Value );
    rotate ( random (360));
    triangle( centerX, centerY, rightX, rightY, leftX, leftY );

pop();
*/



}