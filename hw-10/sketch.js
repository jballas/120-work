function setup(){
    createCanvas( 600, 600);
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

let b_location_x ;
let b_location_y ;

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
        }// end of nested loop
    } // end loop

    // Bee function using two arguments for x and y. I'm going to make these variables I can change.

    // Bee location variables
    b_location_x = position[0];
    b_location_y = position[0];

    bee(b_location_x, b_location_y);
} // end of draw function


function drawFlower(){

    // variable for random petal fill colors
    let flower_petal = random(petal_colors );
    
    //I needed to check if I was getting the random numbers, so I used the console.log below
    //console.log(flower_petal);

push();
    scale( .5, .5);
    fill( flower_petal );
    rotate ( mouseX );
    triangle( flower.center_x, flower.center_y, flower.right_x, flower.right_y, flower.left_x, flower.left_y); 
    pop();
}

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
        
        // pattern for stripes using loop. I had to add in a second loop to make sure the x,y variables could be changed. Math hurts.
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
