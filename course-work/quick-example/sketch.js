
let r = 100
let g = 255
let b = 100

function setup() {
    createCanvas(400,400)
    background( r,g,b );
}

let angle = 0;

function draw(){

//REPEATING LINES with mouseX
push();
    translate( width * .25, height * .25);
    rotate(angle);
    line(-50, 0, 50, 0);

    //angle = mouseX;
pop();

// POINT
push();
    strokeWeight(5);
    point(250, 250);
pop();

//LINES
line(200, 300, 300, 200);

line(200, 250, 300, 250);

line(200, 200, 300, 300);

line(250, 200, 250, 300);



 /*my loops never work until I understand what I'm trying to repeat.

for(x = 0; x < 500; x += 50){
    line(center, center, x, x -250);
}

//center ++;
*/
}