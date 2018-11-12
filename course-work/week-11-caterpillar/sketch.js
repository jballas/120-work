let bugs = [];
let how_many_bugs = 10;

function setup(){
    createCanvas( windowWidth, 600);
 
    background(0);  

    for (let i = 0; i < how_many_bugs; i ++ ){
        bugs.push ( new Caterpillar() );
    }

}


function draw(){
    frameRate(2);



    //xPos = ceil( random(40, 50));

    //for( let i = 0; i <= 350; i +=50 ){
       // ellipse(i, xPos, 50);
    //}

    for(let  i = 0; i < bugs.length; i ++){
        bugs[i].frame();
    }


}


class Caterpillar {

    construction(){
        this.x_location = 50;
        this.y_location = ceil( random(40, 55) );
        this.size = 50;
        this.color = 255;
    }

    frame() {
        this.display();
    }
    
    display() {

        push();
        
            translate( width * .25, height* .25);
            fill(this.color);
            ellipse(this.x_location, this.y_location, this.size);
        pop();
    }


}