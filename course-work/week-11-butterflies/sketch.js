function setup() {

    createCanvas(windowWidth, 600);
// This was an experiment in flapping wings
butterfly = new Butterfly();

}

//let swarm = [];
//let how_many = 10;

function draw() {
    background(0);
    frameRate(8);

    butterfly.display();
    butterfly.move();
    
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
        this.flip = 1;
        this.flap = 1;
        this.delta = 10;

    }

    frame(){
        this.display();
        this.move();
    }

    //Display Triangle wings
    display() {
        translate(width * .25, height * .25);

        triangle(this.top_x, this.top_y, this.wingTip_x, this.wingTip_y, this.bottom_x, this.bottom_y);

        push();

            scale( -this.flip , this.flap );
            
            stroke(255);
            noFill();
            triangle(this.top_x, this.top_y, this.wingTip_x, this.wingTip_y, this.bottom_x, this.bottom_y);
        
        pop();
    }

    
    //Move wings, flapping
    move() {

       //this.flip *= -1;
        
        this.wingTip_x += this.delta;
        if (this.wingTip_x == 50){
            this.wingTip_x = 0;

        }

    }
    


    

}

