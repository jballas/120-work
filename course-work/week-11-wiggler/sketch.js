let wiggle = [];
let xPos = 1;
let yPos = 1;
let deltaX = .01;

function setup(){
    createCanvas( windowWidth, 600);

 

    for (let i = 0; i < 10; i ++ ){
        wiggle.push ( ceil( random(40, 50)) )
    }

    console.log(wiggle);
}


function draw(){
    frameRate(10);
    background(0); 

    
    //translate( width/4, height/4);


    // for( let i = 0; i <= 350; i +=50 ){
    //    ellipse(i, xPos, 50);
    //}

    for( i = 0; i < wiggle.length; i ++){
        ellipse(i* 50 + xPos, wiggle[i] + yPos, 50);
        xPos ++;
        yPos += random(-1, 1);
    }

    console.log(wiggle);

   
}