
let r = 100
let g = 255
let b = 100

function setup() {
    createCanvas(400,400)
    background( r,g,b );
}

let angle = 0;

let index = [ 200,250,300];

function draw(){

/*REPEATING LINES with mouseX
push();
    translate( width * .25, height * .25);
    rotate(angle);
    line(-50, 0, 50, 0);

    //angle = mouseX;
pop();
*/

/* POINT
push();
    strokeWeight(5);
    point(250, 250);
pop();


let x_loc = index[1];
let y_loc = index[0];
let z_loc = random(index);


//LINES
line(y_loc, z_loc, z_loc, y_loc);

line(x_loc, z_loc, z_loc, 250);

line(z_loc, 250, z_loc, 300);

line(300, z_loc, z_loc, z_loc);

x_loc += 5;
*/

//console.log( z_loc);

 //my loops never work until I understand what I'm trying to repeat.

for(x = 0; x < width; x += 50){
    for (y = 0; y < 500; y += 50){
        line(y, x, x-25, y-25 );

    }
}

//center ++;

}