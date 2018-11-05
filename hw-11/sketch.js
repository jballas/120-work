let bucket = [];
let kernals = 4;

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
    }

    frame(){
        this.seed();
        this.heatingUp();
        this.poppedCorn();
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

            if( this.seed_x >= height ){
                this.poppedCorn();
            }

        }

        console.log(this.seed_move);
    }

    // Display popped popcorn
    poppedCorn() {
        
            fill( this.poppedCorn_color);
            ellipse(205, 205, 30, 45);
            ellipse(195, 225, 15, 15);
            ellipse(211, 225, 25, 20);
            ellipse(220, 215, 18, 18);
    }

}