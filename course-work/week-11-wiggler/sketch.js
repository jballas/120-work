let wiggle = [];
let xPos = 1;
let yPos = 1;

let ran_x = 0;
let ran_y = 0;

function setup(){
    createCanvas( 600, 600);

 

    for (let i = 0; i < 10; i ++ ){
        wiggle.push ( ceil( random(40, 50)) )
    }

    console.log(wiggle);
}


function draw(){
    frameRate(30);
    background(0); 

    for( i = 0; i < wiggle.length; i ++){

        push();
            translate( ran_x, ran_y);

            fill('rgba(0, 255, 20, .40)' );
            ellipse(i* 50 + xPos, wiggle[i] + yPos, 50);

        pop();

        //sideways and vertical movement
        xPos ++;
        yPos = random(-2, 2) ;


        // Next wiggler appears
        if (xPos >= width){
            xPos = -500;
            ran_y = ceil( random(height));
        }

    }

    //console.log(yPos);
    //console.log(xPos);

   
}