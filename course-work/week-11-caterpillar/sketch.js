let bugs = [];
let how_many_bugs = 30;


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
        this.delta_x = 10;
        this.delta_y = random(10);
    }


    frame() {
        this.display();
        this.move();
    }
    
    display() {

        push();
            
            //for( let i = 0; i <= 350; i +=50 ){
                noFill();
                stroke(255);
                //this.x_location = i;
                    ellipse(this.x_location, this.y_location, this.size);
            //}
            //ellipse(this.x_location, this.y_location, this.size);
        pop();

    
        
    }

    move() {

        this.x_location += this.delta_x;

        if (this.x_location >= width || this.x_location <= 0){
            this.delta_x *= -1;
        }

      this.y_location += this.delta_y;

        if (this.y_location >= height || this.y_location <= 0){
            this.delta_y *= -1;
        }

    }

}