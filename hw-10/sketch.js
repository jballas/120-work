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

    push();
    translate(100,100);
    drawFlower();
    pop();  

    push();
    translate(300,100);
    drawFlower();
    pop();    

    push();
    translate(500,100);
    drawFlower();
    pop(); 

    push();
    translate(100,300);
    drawFlower();
    pop(); 

    push();
    translate(300,300);
    drawFlower();
    pop(); 

    push();
    translate(500,300);
    drawFlower();
    pop(); 

    push();
    translate(100,500);
    drawFlower();
    pop();
    
    push();
    translate(300,500);
    drawFlower();
    pop(); 

    push();
    translate(500,500);
    drawFlower();
    pop();


/*
push();
    // I want to make my flower repeat all over the screen
    for( let x_pos = 100; x_pos < 300; x_pos +=100 ){
        for( let y_pos = 100; y_pos < 300; y_pos +=100){

        translate(100, 100);
        drawFlower();
        }// end of nested for()loop
    } // end of for() loop

pop();
*/

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

