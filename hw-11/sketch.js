let bucket = [];
let kernals = 20;
let bg_color = 0;

function setup(){
    createCanvas(windowWidth, 400);

    for ( let i = 0; i < kernals; i++) {
        bucket.push( new Popcorn() );
    }
}

function draw() {

    background(bg_color);
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
        this.seed_move = ceil( random(-5,2) );
        this.seed_x = random(width);
        this.seed_y = random(height);
        this.seed_size_w = 15;
        this.seed_size_h = this.seed_size_w * 2;
        this.popped_size = random(10, 25);
        this.loc_x = random(width);
        this.loc_y = random(height);
        this.delta = 10;
        this.popped_x = random(this.loc_x - 3, this.loc_x + 5) ;
        this.popped_y = random(this.loc_y, this.loc_y + 10) ;

    }

    // I'm using frame to call these methods in the draw function above.
    frame(){
        this.seed();
        this.heatingUp();
        //this.explodes();
    }

    // Display Seed
    seed(){
            fill(this.seed_color);
            ellipse( this.seed_x, this.seed_y, this.seed_size_w, this.seed_size_h )   
    }

    // Display popped popcorn
    // How do I make lots of popped corn?
    poppedCornPieces(){
        
        

                push();
                    fill( this.poppedCorn_color);
                    ellipse(this.loc_x, this.loc_y, this.popped_size + 10, this.popped_size + 15);
                    
                    ellipse(this.loc_x + this.popped_x, this.loc_y, this.popped_size, this.popped_size);
                                
                    ellipse(this.loc_x, this.loc_y, this.popped_size, this.popped_size);
                                
                    ellipse(this.loc_x, this.loc_y, this.popped_size, this.popped_size);
                pop();

              
            //}
        //}
    
    }

    // Seeds need to jump around, as if they are heating up
    heatingUp(){

        if ( this.seed_move <= 2 ) {
           this.seed_y += random(-2, 3);
        } 

        // Eventually the seeds wiggle off the screen and appear as poppedCorn
        if( this.seed_y >= height ){
            this.poppedCornPieces();
            this.poppedCorn();
            }
    

        // checking the randomness of this.seed_move
        console.log(this.seed_move);
    }

    poppedCorn(){
        
        this.loc_x += random(-1, 1);
        this.loc_y += random(-1, 1);

    }

    //TODO: I need to make an explosion method, lines flashing outward from a center point, or something like that.
    // A timed event, after 5 seconds the seeds expand, and "explode". How do I get that?
    explodes(){
        if( millis() >= 8000 ){
            this.seed_size_w ++ && this.seed_size_h ++;
            
                if( this.seed_size_w >= 50){
                    background(bg_color);
                    for( this.loc_x = 0; this.loc_x <= 200; this.loc_x += 50 ) {
                        for ( this.loc_y = 0; this.loc_y <= 200; this.loc_y += 50 ){
                            this.poppedCorn();
                        }
                    }
                }
        }
    }

    
}
