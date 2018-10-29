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


// Flower array for the colors
let petal_colors = [ "rgba( 120, 20, 255, .40)", "rgba(0, 200, 255, .40)", "rgba(22, 244, 0, .60)", "rgba(195, 2, 255, .40)", "rgba(0, 115, 250, .40)", "rgba(0, 245, 140, .40)" ];






function draw(){

    frameRate(10)

    // I want to make my flower repeat in a grid on the screen
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

    // variable for random petal fill colors
    let flower_petal = random(petal_colors );
    
    //I needed to check if I was getting the random numbers
    //console.log(flower_petal);

push();
    scale( .5, .5);
    fill(flower_petal);
    rotate ( mouseX );
    //ellipse( center_x, center_y, right_x, right_y);
    //triangle( flowerPetals[0], flowerPetals[1], flowerPetals[2], flowerPetals[3], flowerPetals[4], flowerPetals[5] );
    triangle( flower.center_x, flower.center_y, flower.right_x, flower.right_y, flower.left_x, flower.left_y); 
    pop();
}

