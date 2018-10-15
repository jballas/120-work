function setup() {
    createCanvas( windowWidth, 600);
}
let angle = 1;
let left_x = 5;

let left_y = 200;
let right_x = 50;

let right_y = 200;

function draw(){

    background(0);

    // set up triangle variables
    
    let center_x = 25;
    let center_y = 100;
 
    
    
    let c_Value = color(255, 200, 0);
frameRate(10);



//noCursor();

for (let flower_x = 25; flower_x < width; flower_x ++ ) {
    // create a triangle that rotates

    translate(width * .25, width * .25);
    fill( c_Value );
    rotate ( 1);
        triangle( flower_x, center_y, right_x, right_y , left_x, left_y);
}

left_x ++;
//right_y ++;

if(left_x >= 50 || left_x == 0 ) {
    left_x = left_x * -1;
}



//angle ++;


/*
push();

    translate(width * .5, width * .5);
    fill( c_Value );
    rotate ( random (360));
    triangle( centerX, centerY, rightX, rightY, leftX, leftY );

pop();
*/



}