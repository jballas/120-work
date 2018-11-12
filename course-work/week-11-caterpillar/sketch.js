
let wiggle = [];
let xPos;
function setup(){
    createCanvas( windowWidth, 600);
 
    background(0);  

    for (let i = 0; i < 10; i ++ ){
        wiggle.push ( ceil( random(40, 55)) )
    }

    console.log(wiggle);
}


function draw(){
    frameRate(2);

    translate( width/4, height/4);


    //xPos = ceil( random(40, 50));

    //for( let i = 0; i <= 350; i +=50 ){
       // ellipse(i, xPos, 50);
    //}

    for( i = 0; i < wiggle.length; i ++){
        ellipse(i* 50, wiggle[i], 50);
    }


}
