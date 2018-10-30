function setup(){
    createCanvas( 600, 700);
    background(0);
}

// Flower variables
let flower = {
    center_x: 25,
    center_y: 100,
    right_x: 50,
    right_y: 200,
    left_x: 5,
    left_y: 200
    };

// Bee location. I want b_location_x to be 100, 300, or 500. I want b_location_y to be 100, 300, or 500. I think I'll use an array.
// Bee position Array
let position = [ 100, 300, 500];

  // Bee location variables
let b_location_x = position[1];
let b_location_y = position[1];

// created variable for petal movement
let petal_angle = 0;

// Flower array for the colors
let petal_colors = [ "rgba( 120, 20, 255, .40)", "rgba(0, 200, 255, .40)", "rgba(22, 244, 0, .60)", "rgba(195, 2, 255, .40)", "rgba(0, 115, 250, .40)", "rgba(0, 245, 140, .40)" ];

function draw(){

    frameRate(10)


    // I want to make my flower repeat in a grid on the screen
    for( let x_pos = 100; x_pos < 600; x_pos +=200 ){
        for( let y_pos = 100; y_pos < 600; y_pos +=200){
            push();
                translate(x_pos, y_pos);
                drawFlower(petal_angle);
            pop();
        }// end of nested loop
    } // end loop

    // Bee function using two arguments for x and y. I'm going to make these variables I can change.
    bee(b_location_x, b_location_y);

    //Petals move authomatically
    petal_angle ++;

} // end of draw function


// Function to change the bee's location randomly when you click the mouse.

function mousePressed(){
    b_location_x = random (position);
    b_location_y = random (position);
   
   // Unfortunately I had add the background, otherwise the bee's would become permanent on the sketch.
    background (0);
   }

// Flower function, with one parameter
function drawFlower(angle){

    // variable for random petal colors
    let flower_petal = random(petal_colors );
    
    //I needed to check if I was getting the random numbers.
    console.log(flower_petal);

    push();
        scale( .5, .5);
        fill( flower_petal );
        rotate ( angle );
        triangle( flower.center_x, flower.center_y, flower.right_x, flower.right_y, flower.left_x, flower.left_y); 
    pop();
}

// Bee Function, with two parameters
function bee(x,y){
    
    // body
    fill('yellow')
    ellipse( x, y, 20, 40);
    
    // wings
    push();
        fill(0)
        stroke(250);
        ellipse( x - 20, y, 20, 10);
        ellipse( x + 20, y, 20, 10);
    pop();

    // stripes
    push();
        stroke(0)
        
        // I made a pattern a stripes using a loop. I had to add in a y loop to make sure the x,y variables could be changed. Math hurts.
        for(s = x; s < x + 20; s+= 5){
            for ( t = y; t < y + 20; t+=5){
                line(x - 20, t, x + 15, t);
            }
        }
    pop();
    
    // Before I can make a loop, I still have to create all the lines with all the various numbers. Otherwise I don't understand the math. Here the original code for stripes:

    /*  line(280, 300, 315, 300);
        line(280, 305, 315, 305);
        line(280, 310, 315, 310);
        line(280, 315, 315, 315);

    */
}
