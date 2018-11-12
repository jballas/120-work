
function setup(){
    createCanvas( windowWidth, 600);
 
    spinner = new Spinner();
    
}


function draw(){
    frameRate(2);

    background(0);  
    translate( width/4, height/4);

    let spring = ceil( random(40, 50) );
    let size = ceil( random(50,120) );

    
    spinner.display( spring, 50, size);



    console.log(spring);

}

class Spinner {

    constructor(){
        this.jump = 500;
        
    }


    display(x,y, size) {

        stroke(255);
        noFill(); 
        ellipse(x,y, size );
    
    }

}