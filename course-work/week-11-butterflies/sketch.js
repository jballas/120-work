function setup() {

    createCanvas(400, 400);
// This is an experiment in flapping wings
butterfly = new Butterfly();

}

//let swarm = [];
//let how_many = 10;

function draw() {
    background(0);
    frameRate(8);

    butterfly.display();
    butterfly.move();
    butterfly.edgeCheck();
    
}

// Butterfly 

class Butterfly {

    constructor(){
        this.top_x = 5;
        this.top_y = 50;
        this.wingTip_x = 0;
        this.wingTip_y = 50;
        this.bottom_x = 5;
        this.bottom_y = 100;
        this.delta_x = 10;
        this.delta_y = 10;
        this.move_x = width * .25;
        this.move_y = height * .25;

        this.flip = 1;
        this.flap = 10;
        this.r = 3.0;
    }

    frame(){
        this.display();
        this.move();
        this.edgeCheck();
    }

    //Display Triangle wings
    display() {
        translate(this.move_x, this.move_y);


        triangle(this.top_x, this.top_y, this.wingTip_x, this.wingTip_y, this.bottom_x, this.bottom_y);

        push();

        scale( -this.flip , this.flip );
            stroke(255);
            noFill();
            triangle(this.top_x, this.top_y, this.wingTip_x, this.wingTip_y, this.bottom_x, this.bottom_y);
        
        pop();

        beginShape();
        vertex(0, -this.r*2);
        vertex(-this.r, this.r*2);
        vertex(this.r, this.r*2);
        endShape(CLOSE);
    
    }

    
    //Move wings, flapping
    move() {
   

        this.move_x += this.delta_x;
        this.move_y += this.delta_y;


        //this.r = 
       
        this.wingTip_x += this.flap;
        if (this.wingTip_x == 50){
            this.wingTip_x = 0;
        }

        console.log( this.move_x);

    }
    

    edgeCheck(){

        if (this.move_x >= width | this.move_x <= 0 ){
            this.delta_x *= -1;
        }
        if(this.move_y >= height || this.move_y <= 0 ) {
            this.delta_y *= -1;
        }
        
    }


    

}

