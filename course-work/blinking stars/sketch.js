
let r = 100
let g = 255
let b = 100

function setup() {
    createCanvas(400,400)
}

// Nice, I changed the initial location of X and Y from 0 to 10 and it make a scattered, dropping.
// removing the Move function and making location of X to 1000 gets me a long scattered lines
let loc_x = 25;

// When I changed y to 10, they became actual star shapes!!! let loc_y = 10;
let delta_x = 10;


function draw(){

    background( r,g,b );
    frameRate(3);

star( width * .25, height * .25);
star(width * .75, height * .75);
move();

}

function star(x, y){

    for ( a = 0; a < 50; a += 5){
        push();
            translate(x, y );
            rotate(a);
            line(loc_x * -1, loc_y, loc_x, loc_y);       
        pop();
    }
    
}

function move(){

    //I change from + to minus and not it bounces. It's very much like twinking stars. Althought they blink at the same time. Too bad I can't add an element of randomness to their blinking.
    loc_x -= delta_x;

    if(loc_x + delta_x >= 0 || loc_x + delta_x <= 100) {
        loc_x *= -1;
    }
}