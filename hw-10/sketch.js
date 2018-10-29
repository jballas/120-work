function setup(){
    createCanvas( 600, 600);
    background(0);
}

//flower variables
let flower = {
    center_x: 25,
    center_y: 100,
    right_x: 50,
    right_y: 200,
    left_x: 5,
    left_y: 200
    };


// Flower array 
let flowerPetals = [ 25, 100, 50, 200, 5, 200];

    
//let f_width = width * .5;
//let f_height = height * .5;

function draw(){



    // I want to make my flower repeat all over the screen
    for( let x_pos = 100; x_pos < 600; x_pos +=200 ){
        for( let y_pos = 100; y_pos < 600; y_pos +=200){
            push();
                translate(x_pos, y_pos);
                drawFlower();
            pop();
        }// end of nested for()loop
    } // end of for() loop




} // end of draw function


function drawFlower(){

push();
    scale( .5, .5);
    fill( "rgba( 120, 20, 255, .40)" );
    rotate ( mouseX );
    //ellipse( center_x, center_y, right_x, right_y);
    //triangle( flowerPetals[0], flowerPetals[1], flowerPetals[2], flowerPetals[3], flowerPetals[4], flowerPetals[5] );
    triangle( flower.center_x, flower.center_y, flower.right_x, flower.right_y, flower.left_x, flower.left_y); 
    pop();
}

