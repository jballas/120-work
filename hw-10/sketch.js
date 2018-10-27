function setup(){
    createCanvas( windowWidth, 600);
    background(0);
}

/* flower variables
let flower = {
    center_x: 25,
    center_y: 100,
    right_x: 50,
    right_y: 200,
    left_x: 5,
    left_y: 200
    };

    */
function draw(){
    translate( width * .5, height * .5);
        

push();
    // I want to make my flower repeat all over the screen
    for( let x_pos = 100; x_pos < width; x_pos += width / 3){

        for( let y_pos = 100; y_pos < height; y_pos += width / 3){

        //I was able to use translate to make my drawFlower function repeat.
        //ellipse( x_pos, y_pos, 50, 50);
        drawFlower( x_pos, y_pos, 50, 200, 5, 200);
        }// end of nested for()loop
    } // end of for() loop



pop();


} // end of draw function


function drawFlower( center_x, center_y, right_x, right_y, left_x, left_y){

push();
    scale( .5, .5);
    fill( "rgba( 120, 20, 255, .40)" );
    rotate (mouseX);
    //ellipse( center_x, center_y, right_x, right_y);
    triangle( center_x, center_y, right_x, right_y, left_x, left_y );
pop();
}
