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
        this.wingTip_x = 50;
        this.wingTip_y = 25;
        this.bottom_x = 5;
        this.bottom_y = 100;
        this.delta_x = 10;
        this.delta_y = 10;
        this.move_x = random(width);
        this.move_y = random(height);

        this.flip = 1;
        this.flap = 10;
    }

    frame(){
        this.display();
        this.move();
        this.edgeCheck();
    }

    //Display butterfly
    display() {
        translate(this.move_x, this.move_y);

        // Right wing
        triangle(this.top_x, this.top_y, this.wingTip_x, this.wingTip_y, this.bottom_x, this.bottom_y);

        // Left wing
        push();

            scale( -this.flip , this.flip );
            stroke(255);
            noFill();
            triangle(this.top_x, this.top_y, this.wingTip_x, this.wingTip_y, this.bottom_x, this.bottom_y);
        
        pop();

        // Body
        ellipse( this.top_x - 5 , this.top_y + 20, 10, 50);
    
    }

    
    //Move wings, flapping
    move() {
   
        //Movement across the screen
        this.move_x += this.delta_x;
        this.move_y += this.delta_y;


        // Wing's flapping       
        this.wingTip_x -= this.flap;
        if (this.wingTip_x == 0){
            this.wingTip_x = 50;
        }

        console.log( this.move_x);

    }
    

    edgeCheck(){

        if (this.move_x >= width | this.move_x <= 0 ){
            this.delta_x *= -1;
        }
        if(this.move_y >= height || this.move_y <= -100 ) {
            this.delta_y *= -1;
        }
        
    }


    

}

