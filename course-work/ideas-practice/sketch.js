function setup() {
    createCanvas( 800, 800 );
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
    noStroke();


    ellipse(centerX, centerY, d_circle );

    centerX ++;
    centerY ++;
    d_circle ++;

    if( centerY > 200) {
        centerY = 250;
        centerX = 250;
    }

    push();
        strokeWeight(1);
        stroke(255);
    //   line(500, 500, 800, 800);

    for( let c = 500; c < 550; c +=10 ){
        line(c, 500, c+ 300, 800);
    }

    pop();


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