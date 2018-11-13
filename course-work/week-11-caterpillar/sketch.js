let bugs = [];
let how_many_bugs = 3;


function setup(){
    createCanvas( windowWidth, 600);

    for (let i = 0; i < how_many_bugs; i ++ ){
        bugs.push( new Caterpillar() );
    }

}


function draw(){
    frameRate(20);

    background(0);
    //translate( width * .25, height* .25);
    for(let i = 0; i < bugs.length; i ++){
        bugs[i].frame();
    }

}


class Caterpillar {

    constructor(){
        this.x_location = 50;
        this.y_location = ceil( random(40, 55) );
        this.size = 50;
        this.delta = random(10);
    }


    frame() {
        this.display();
        this.move();
    }
    
    display() {

        push();
            
            for( let i = 0; i <= 350; i +=50 ){
                noFill();
                stroke(255);
                    ellipse(i, this.y_location, this.size);
            }
            //ellipse(this.x_location, this.y_location, this.size);
        pop();

    
        
    }

    move() {

        this.y_location += this.delta;

        if (this.y_location >= height || this.y_location <= 0){
            this.delta *= -1;
        }

    }

}