function setup() {
    createCanvas( windowWidth, 600);
    background(0);
}

    // angle in global scope
    var angle = 0

    var centerX = 25;
    var centerY = 100;

    var d_circle = 50;    

function draw() {

    // set up triangle variables

    var rightX = 50;
    var rightY = 200;
    var leftX = 5;
    var leftY = 200;

    // colors variables? Unfortunately I can't make the RGB red value a variable. I can only make the whole thing a color variable. 
    var red_Value = color(255, 0, 0);

    frameRate(10);
    //noStroke();


    // EXPERIMENT with for statement, consecutive hill shapes on the bottom of the screen


for(let hill_x = 20; hill_x < width; hill_x += 20) {
    for (let hill_y = height * .6; hill_y < height - 100; hill_y += 60 ) {
    fill('#4d2f20');
    ellipse( hill_x, hill_y, random(ceil(50)), 200 );    
}   
    }






//if( hill_x)

/* EXPERIMENT with if statements, a pear shape into a circle shapes until it grows so big it  set to a simple variable. 
    ellipse(centerX, centerY, d_circle );

    centerX ++;
    centerY ++;
    d_circle ++;

    if( centerY > 200) {
        centerY = width/2;
        centerX = width/2;
    }

    if(d_circle > width) {
        d_circle = 500;
    }
     //else ( d_circle < 25) {
    //    d_circle = d_circle ++;
    //}

    push();
        strokeWeight(1);
        stroke(255);
    //   line(500, 500, 800, 800);
*/

/* EXPERIMENT with four line sinto the corner of the canvas
    for( let c = 500; c < 550; c +=10 ){
        line(c, 500, c+ 300, 800);
    }

    pop();

*/


/* BELOW IS AN EXPERIMENT WITH TRIANGLES THAT ROTATE
    //draw first triangle
        push();
            fill( red_Value );
            rotate (mouseY);
            triangle( centerX, centerY, rightX, rightY, leftX, leftY );
        pop();
        
    // second triangle
        
    push();
        fill( 'rgba( 120, 20, 255, .40)' );
        translate ( 400, 400 );
        rotate (mouseX);
        triangle( centerX, centerY, rightX, rightY, leftX, leftY );
    pop();

    push();
        fill( 'rgba( 120, 20, 255, .20)' );
        translate ( 350, 200 );
    //    rotate ( QUARTER_PI) ;
        rotate (mouseY);
        triangle( centerX, centerY, rightX, rightY, leftX, leftY );
    pop();

    push();
        fill( 'rgba( 10, 200, 25, .60)' );
        translate ( 350, 200 );
    //    rotate ( QUARTER_PI) ;
        rotate (mouseY);
        triangle( centerY, centerX, rightY, rightX, leftY, leftX );
    pop();

    push();
         fill( red_Value );
        translate (600, 300)
         rotate (mouseX);
        triangle( centerX, centerY, rightX, rightY, leftX, leftY );
    pop();

    push();
        fill( 'rgba( 10, 200, 255, .60)' );
        translate ( -100, 600 );
        rotate (mouseY);
        triangle( centerY, centerX, rightY, rightX, leftY, leftX );
    pop();
*/
}