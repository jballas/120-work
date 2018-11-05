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

    //This should call new popcorns from the popcorn Class, using the bucket Array I put the set-up function. 
    for( i = 0; i < bucket.length; i ++){
        bucket[i].frame(); 
    }


}

//TODO Figure out what my class constructor parts might be, like every attribute for the popped corn, and the seed, I think. Including this one, of jumped
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
        this.x = random(width);
        this.y = random(height);
        this.popped_x = random(this.x - 3, this.x + 5) ;
        this.popped_y = random(this.y, this.y + 10) ;
        
    }

    frame(){
        this.seed();
        this.heatingUp();
    }

    // Display Seed
    seed(){
            fill(this.seed_color);
            ellipse( this.seed_x, this.seed_y, this.seed_size_w, this.seed_size_h )   
    }

    heatingUp(){

    // Seeds need to jump around, as if it's heating up
        if (this.seed_move <= 2) {
            this.seed_y += random(-2, 3);

            if( this.seed_y >= height ){
                this.poppedCorn();
            }

        }

        console.log(this.seed_move);
    }

    // problem - despite the randomness, each one is coming out the same!!
    // Display popped popcorn
    poppedCorn() {
        
            fill( this.poppedCorn_color);
            ellipse(this.x, this.y, this.popped_size + 10, this.popped_size + 15);
            //fill('red');
            ellipse(this.popped_x - 10, this.popped_y, this.popped_size, this.popped_size);
            //fill('blue');
            ellipse(this.popped_x - 2, this.popped_y, this.popped_size, this.popped_size);
            //fill('yellow');
            ellipse(this.popped_x + 4, this.popped_y +3, this.popped_size, this.popped_size);
           
            
    }

}