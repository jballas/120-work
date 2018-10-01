//Global variables
var postionX = 1
var postionY = 15
var valueA

//setup background here
function setup(){
     createCanvas( 1000, 600);
     background( 'rgb(68, 22, 6)' );
 }

 function draw(){

    // show framerate
   
    frameRate(2);
   
    //translate to middle of screen
    //translate( width*.25, height*.25 );

    // change alpha value, valueA to be a random number
    valueA = random(); 

    strokeWeight(2);
    stroke( 'rgba(255, 25, 200, valueA)');
    line( postionX, postionY, 15, 60 );
    line( postionX, postionY, 30, 30 );

    fill( 'rgba(255, 25, 200, .10)' );
    bezier( postionX, postionY, 200, 20, 5, 250, 10, 90 );

    //move postionX around
    postionX += 5
    postionY /= random();

    // movement of Y restrained to under
    postionY %= 300;
    //postionY *= 2;    
    
    

}