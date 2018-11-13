let circleSize = [];
let how_many  = 20;

function setup(){
    createCanvas( windowWidth, 600);
 
    for( i = 0; i < how_many; i += 50){
        circleSize.push (new Pulse() );
    }

}


function draw(){
    background(0);  
    frameRate(2);

    translate( width/4, height/4);

    let spring = ceil( random(50,120) );

    

for (let i = 0; i < circleSize.length; i++){
    circleSize[i].frame( 50, 50, spring)
}

    console.log(spring);

}


class Pulse {

    constructor(){
        this.size = ceil( random(50,400) );
        this.jump = 500;
        
    }

    frame(x,y,size){
        this.display(x,y, size);

    }

    display(x,y, size) {

        strokeWeight(25)
        stroke('rgba(25, 250, 0,.70)' );
        fill(255); 
        ellipse(x,y, size );
    
    }
}