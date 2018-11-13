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
            
            for( let i = 0; i <= 350; i +=50 ){
                noFill();
                stroke(255);
                ellipse(this.x_location + i, this.y_location + i, this.size);
            }
            //ellipse(this.x_location, this.y_location, this.size);
        pop();

    }

    move() {

        this.x_location += this.delta_x;

        if (this.x_location >= width || this.x_location <= 0){
            this.delta_x *= -1;
        }

      this.y_location += this.delta_y;

        if (this.y_location >= height -100 || this.y_location <= 0){
            this.delta_y *= -1;
        }

    }



}