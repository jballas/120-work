let bucket = [];
let kernals = 20;

function setup(){
    createCanvas(400, 400);

    for ( let i = 0; i < kernals; i++) {
        bucket.push( new Popcorn() );
    }
}

function draw() {

    background(0);
    frameRate(30);

    //This should call new popcorn from the popcorn Class, using the bucket Array I put the set-up function. 
    for( i = 0; i < bucket.length; i ++){
        bucket[i].frame(); 
    }
}

// I'm making a class called Popcorn, and using the constructor to list all the various properties of popcorn, like color, size, movement, etc.
class Popcorn {

    constructor() {
        this.seed_color = 'rgb( 255, 150, 20)';
        this.poppedCorn_color = 255;
        this.seed_move = ceil( random(-5,5) );
        this.seed_x = random(width);
        this.seed_y = random(height);
        this.seed_size_w = 15;
        this.seed_size_h = this.seed_size_w * 2;
        this.popped_size = random(10, 25) ;
        this.loc_x = random(width);
        this.loc_y = random(height);
        this.popped_x = random(this.loc_x - 3, this.loc_x + 5) ;
        this.popped_y = random(this.loc_y, this.loc_y + 10) ;
        
    }

    // I'm using frame to call these methods in the draw function above.
    frame(){
        this.seed();
        this.heatingUp();
        this.explodes();
    }

    // Display Seed
    seed(){
            fill(this.seed_color);
            ellipse( this.seed_x, this.seed_y, this.seed_size_w, this.seed_size_h )   
    }

    // Display popped popcorn
    // How do I make lots of popped corn? With a for loop? parameter?
    poppedCorn(){
        

            push();
                fill( this.poppedCorn_color);
                ellipse(this.loc_x, this.loc_y, this.popped_size + 10, this.popped_size + 15);
                
                ellipse(this.popped_x - 10, this.popped_y, this.popped_size, this.popped_size);
                            
                ellipse(this.popped_x - 2, this.popped_y, this.popped_size, this.popped_size);
                            
                ellipse(this.popped_x + 4, this.popped_y +3, this.popped_size, this.popped_size);
            pop();
        
    
    }

    // Seeds need to jump around, as if it's heating up
    heatingUp(){

        if (this.seed_move <= 2) {
           this.seed_y += random(-2, 2);
        }

        // checking the randomness of this.seed_move
        console.log(this.seed_move);
    }

    //TODO: I need to make an explosion method, lines flashing outward from a center point, or something like that.
    // A timed event, after 5 seconds the seeds expand, and "explode". How do I get that?
    explodes(){
        if( millis() >= 5000 ){
            this.seed_size_w ++ && this.seed_size_h ++;
            
                if( this.seed_size_w >= 40){
                    background(0);
                    this.poppedCorn();
                }
        }
    }
}
