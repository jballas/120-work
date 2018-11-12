
let wiggle = [];
let xPos = 0;
function setup(){
    createCanvas( windowWidth, 600);
 
    background(0);  

}


function draw(){
    frameRate(20);

    translate( width/4, height/4);

    wiggle.push ( ceil( random(40, 50)) );

    for (let i = 0; i < wiggle.length; i +=10 ){
        ellipse(xPos, wiggle[i], 50);
    }

    xPos = (xPos + 10) % windowHeight;

    console.log(wiggle);

}
