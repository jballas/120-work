//Global variables
var postionX = 1
var postionY = 15
var red
var green
var blue
var valueA

//setup background here
function setup(){
     createCanvas( 1000, 600);
     background( 'rgb(68, 22, 6)' );
 }

 function draw(){

    // show framerate
   
    frameRate(2);
   
    // change alpha value, 
    //Can valueA to be a random number?
    red = 255; 
    green = 255;
    blue = 100;
    valueA = ceil( random(100) );
    
    constrain( valueA, 10, 100 )

    push()
    
    noStroke();

        // first triangle
        fill( red, green, blue, valueA );
        triangle( postionX, postionY, 150, 60, postionX + 200, postionY + 200 );

        /*
        push()

            //translate to middle of screen
            translate( width*.25, height*.25 );
            scale(.50);

            //second triangle
            fill( blue, green, red, valueA );
            triangle( postionX, postionY, 30, 30, postionY + 500, postionX + 500 );

        pop();
        */

    pop();

    //Bezier curve
    fill( 'rgba(255, 25, 200, .10)' );
    bezier( postionX, postionY, 200, 20, 5, 250, 10, 90 );

    //move postionX around
    postionX += 5
    postionY /= random();

    // movement of X and Y restrained by modulo
    postionX %= 500;
    postionY %= 300;
    


}