// I was attempting to make caterpillars, but it looks nothing like that. It's more like a 3D cylinder, or a waterfall. Anyway, I'm leaving the name. 
class Caterpillar {

    constructor(){
        this.x_location = 50;
        this.y_location = ceil( random(40, 55) );
        this.size = 50;
        this.diameter = this.size * 0.5;
        this.delta_x = 10;
        this.delta_y = random(10);
    }


    frame(objArr, myIdx) {
        this.display();
        this.move();
        this.bounce();
        this.touching(objArr, myIdx);
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

    // This makes the circles bounce left to right and up and down
    bounce(){
        // left to right movement
        if (this.x_location >= width || this.x_location <= 0){
            this.delta_x *= -1;
        }

        // up and down movement
        if (this.y_location >= height -100 || this.y_location <= 0){
            this.delta_y *= -1;
        }
    }

    // New goal. Make things interact, somehow.

    // if the circles are touching, they bounce.
    touching(objArr, myIdx) {
            for (var i = 0; i < objArr.length; i++) {
                if (myIdx !== i) {
                    var obj = objArr[i];
                    var objDist = dist(this.x_location, this.y_location, obj.x_location, obj.y_location);
                    var maxDist = this.diameter + obj.diameter;
                    if (objDist <= maxDist) {
                        
                        this.delta_x *= -1;
                        this.delta_y *= -1;
                        }
                        
                    }
                }
    }


}