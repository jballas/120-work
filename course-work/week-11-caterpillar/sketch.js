function setup(){
    createCanvas( windowWidth, 600);

}


let jump = 500;
let speed = 10;

let leftWall = 50;
let rightWall = 75;


function draw(){
    background(0);  
    frameRate(2);

    translate( width/4, height/4);
    let spring = ceil( random(40, 50) );
    

    for( i = 0; i < jump; i += spring){
        ellipse(i, width/8, 50 );    
    }

      
    //if (spring >= width || spring <= 0){
    //    spring *= -1; 
    //}

    console.log(spring);

    //jump += speed ;
    //if( jump >= 120 || jump <= 0) {
    //    jump = 5
    //}
}