function setup(){
    createCanvas( windowWidth, 600);
    background(0);
}

// flower variables
let flower = {
    center_x: 25,
    center_y: 100,
    right_x: 50,
    right_y: 200,
    left_x: 5,
    left_y: 200
    };

function draw(){
push();

    // I want to make my flower repeat all over the screen
    let number_per_row = 20;
    let flowers = width / number_per_row;

    for( let x_pos = 100; x_pos < width; x_pos += flowers){

        for( let y_pos = 100; y_pos < height; y_pos += flowers){

        //I was able to use translate to make my drawFlower function repeat.
        translate( x_pos, y_pos);
        drawFlower();
        }// end of nest for()loop
    } // end of for() loop
pop();

} // end of draw function


function drawFlower(){
push();
    scale( .5, .5);
    fill( "rgba( 120, 20, 255, .40)" );
    rotate (mouseX);
    triangle( flower.center_x, flower.center_y, flower.right_x, flower.right_y, flower.left_x, flower.left_y );
pop();
}
