
let r = 100
let g = 255
let b = 100

function setup() {
    createCanvas(400,400)
}

let loc_x = 0;
let loc_y = 0;
let delta_x = 10;


function draw(){

    background( r,g,b );
    frameRate(3);

star( width * .25, height * .25);
star(width * .75, height * .75);
move();

//REPEATING LINES, flashing effect.
/*
for ( a = 0; a < 50; a += random(15)){
    push();
        translate( width * .25, height * .25);
        rotate(a);
        line(loc_x * -1, loc_y, loc_x, loc_y);       
    pop();
}
*/


//POINT
push();
    strokeWeight(5);
    point(250, 250);
pop();



//console.log( z_loc);

 /*my loops never work until I understand what I'm trying to repeat.

for(x = 0; x < width; x += 50){
    for (y = 0; y < 500; y += 50){
        line(y, x, x-25, y-25 );

    }
*/

}

function star(x, y){

    for ( a = 0; a < 50; a += random(5, 15)){
        push();
            translate(x, y );
            rotate(a);
            line(loc_x * -1, loc_y, loc_x, loc_y);       
        pop();
    }
    
}

function move(){

    loc_x += delta_x;

    if(loc_x + delta_x >= 100) {
        loc_x *= -1;
    }
}