let wiggle = [];
let xPos;
let yPos;

function setup(){
    createCanvas( windowWidth, 600);

 

    for (let i = 0; i < 10; i ++ ){
        wiggle.push ( ceil( random(40, 50)) )
    }

    console.log(wiggle);
}


function draw(){
    frameRate(2);
    background(0); 

    
    //translate( width/4, height/4);
    //let spring = ceil( random(40, 50) );
    
    xPos = 1;
    yPos = random( -10, 10);

    // for( let i = 0; i <= 350; i +=50 ){
    //    ellipse(i, xPos, 50);
    //}

    for( i = 0; i < wiggle.length; i ++){
        ellipse(i* 50 + xPos, wiggle[i], 50);
        xPos += random( -10, 10);
    }

    console.log(wiggle);

   
    yPos ++;
    //yPos += random( -1, 1);

}