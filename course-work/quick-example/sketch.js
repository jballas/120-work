
let r = 100
let g = 255
let b = 100

function setup() {
    createCanvas(400,400)
    background( r,g,b );
}

let angle = 0;


function draw(){

//REPEATING LINES with 

for ( a = 0; a < 50; a += 15){
    push();
        translate( width * .25, height * .25);
        rotate(a);
        line(-50, 0, 50, 0);       
    pop();
}



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