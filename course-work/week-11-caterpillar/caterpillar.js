// I was attempting to make caterpillars, but it looks nothing like that. It's more like a 3D cylinder, or a waterfall. Anyway, I'm leaving the name. 
class Caterpillar {

    constructor(){
        this.x_location = 50;
        this.y_location = ceil( random(40, 55) );
        this.size = 50;
        this.diamter = this.size/2;
        this.delta_x = 10;
        this.delta_y = random(10);
    }


    frame() {
        this.display();
        this.move();
        this.bounce();
    }
    
    // Display the screen.
    display() {

        push();
            
            for( let i = 0; i <= 350; i +=50 ){
                noFill();
                stroke(255);
                ellipse(this.x_location + i, this.y_location + i, this.size);
            }
            //ellipse(this.x_location, this.y_location, this.size);
        pop();

    }

    // This makes the circles move across the screen
    move() {

        // Horizontal movement
        this.x_location += this.delta_x;

        // Vertical movement
        this.y_location += this.delta_y;

    }

    bounce(){

        if (this.x_location >= width || this.x_location <= 0){
            this.delta_x *= -1;
        }

        if (this.y_location >= height -100 || this.y_location <= 0){
            this.delta_y *= -1;
        }
    }

    // New goal. Make things interact, somehow.

    //interact(){

        //if (this.diameter)

    //}


}