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

drawFlower();

}


function drawFlower(){
push();
    translate( 200, 200);
    fill( 'rgba( 120, 20, 255, .40)' );
    rotate (mouseX);
    triangle( flower.center_x, flower.center_y, flower.right_x, flower.right_y, flower.left_x, flower.left_y );
pop();
}