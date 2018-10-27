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
    let number_per_row = 3;
    let number_per_col = 3;
    let across = width / number_per_row;
    let down = width / number_per_col;

    for( let x_pos = 100; x_pos < width; x_pos += across){

        for( let y_pos = 100; y_pos < height; y_pos += down){

        //I was able to use translate to make my drawFlower function repeat.
        //Translate( x_pos, y_pos)
        //ellipse( x_pos, y_pos, 50, 50);
        drawFlower( x_pos, y_pos);
        }// end of nested for()loop
    } // end of for() loop
pop();

} // end of draw function


function drawFlower(x, y){
push();
    scale( .5, .5);
    fill( "rgba( 120, 20, 255, .40)" );
    rotate (mouseX);
    triangle( flower.center_x, flower.center_y, flower.right_x, flower.right_y, flower.left_x, flower.left_y );
pop();
}
