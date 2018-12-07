
// class for player, also known as Lillia
class Player {

    constructor(x,y, img){

        this.pos = {
            x,
            y
        }
        this.image = img;

        // Size of player sprite sheet
        this.size = {
            w: 64,
            h: 64
        } 
        this.aniSpeed = 10; // this is the animation speed
        this.sprite_number = 0;
        this.subRect = [
            [0,0],
            [64,0]
        ];

        this.speed = 5;   //this controls how fast the player moves
        this.radius = this.size.w *.20 ; // This controls how close you have to be to reach the goal.

    }

    frame(){
        //this.); // displays the player on screen
        this.animate(); // animates sprite
        this.move(); // Allows the user to control the player with keyboard arrows
        this.inBounds(); // keeps the player inside the walls of the screen.
    }


    // Lillia's sprite will go here

    display(){

        push();
        
            imageMode(CENTER);
            image(
                this.image, 
                this.pos.x, this.pos.y, 
                this.size.w, this.size.h,
                this.subRect[this.sprite_number][0],this.subRect[this.sprite_number][1],
                this.size.w, this.size.h
            );
        pop();
        // for testing the game-win boundaries
        //ellipse(this.pos.x, this.pos.y, this.size.w, this.size.h);
    }

    animate(){

        if(frameCount % this.aniSpeed ===0){
            this.sprite_number ++;
            this.sprite_number %= 2;
        }

    }

    // Lilla's movement across the screen will be controlled by the user.
    move(){

        // Left handed controls.
        if (keyIsDown (65) ) {
            this.pos.x -= this.speed;
        } 
        if (keyIsDown(68) ) {
            this.pos.x += this.speed;
        } 
        if (keyIsDown (87) ) {
            this.pos.y -= this.speed;
        } 
        if (keyIsDown (83) ) {
            this.pos.y += this.speed;
        }

        /* RIGHT handed controls
        if (keyIsDown (LEFT_ARROW) ) {
            this.pos.x -= this.speed;
        } 
        if (keyIsDown(RIGHT_ARROW) ) {
            this.pos.x += this.speed;
        } 
        if (keyIsDown (UP_ARROW) ) {
            this.pos.y -= this.speed;
        } 
        if (keyIsDown (DOWN_ARROW) ) {
            this.pos.y += this.speed;
        }*/
        
    }

    // Prevents Lillia from moving off the screen. 
    inBounds(){
        if (this.pos.x <= 15) {
            this.pos.x = 15;
        }
        if (this.pos.y <= 70) {
            this.pos.y = 70;
        }
        if (this.pos.x >= width -15 ) {
            this.pos.x = width -15;
        }
        if (this.pos.y >= height - 20 ) {
            this.pos.y = height - 20 ;
        }
    }
}