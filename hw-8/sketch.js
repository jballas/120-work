function setup() {
    createCanvas( windowWidth, 600);
}

// Variables for triangle
let left_x = 5;
let left_y = 200;
let right_x = 50;
let right_y = 200;

// Variables for movement
let angle = 2;
let speed = 1;

function draw(){

// Background moved to draw function so it redraws every loop.
background(0);

// Color variable, because there was some dicussion on the forum and I wanted to use the color() function as a varaible.
let c_Value = color( 255, 200, 0 );

frameRate(15);


// _For loop_ using variable I'm calling flower_x, because originally I was trying to make a flower shape, but it became something else.
for (let flower_x = 25; flower_x < width; flower_x ++ ) {

    // create a triangle that rotates
    translate( width * .25, width * .25 );
    fill( c_Value );
    rotate ( angle );
    triangle( flower_x, flower_x + 75, right_x, right_y , left_x, left_y );
}

//Animation, a bouncing effect
if( left_x >= 50 || left_x < 0 ) {
    speed = speed * -1;
}

left_x = left_x + speed;

// I needed to visually see if the mousePressed function worked. And I wanted to know which angles to keep in my code. So I printed the value of the angle to the console.
print( 'The value of angle is ' + angle );
}

// I used the mousePressed function to change the angle. Angle 0 and 1 are not impressive, so I restricted them from 2-15. The angles after 15 create shapes very similiar to what you've already seen.
function mousePressed(){
    angle ++;
    if ( angle == 16 ){
        angle = 2;
    }
}