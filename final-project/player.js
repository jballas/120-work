
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
        this.radius = this.size.w/ 2.5; // This controls how close you have to be to reach the goal.

    }

    frame(){
        this.display(); // displays the player on screen
        this.animate(); // animates sprite
        this.move(); // Allows the user to control the player with keyboard arrows
        this.inBounds(); // keeps the player inside the walls of the screen.
    }


    // Lillia's sprite will go here

    display(){

        push();

            image(
                this.image, 
                this.pos.x, this.pos.y, 
                this.size.w, this.size.h,
                this.subRect[this.sprite_number][0],this.subRect[this.sprite_number][1],
                this.size.w, this.size.h
            );
        pop();
    }

    animate(){

        if(frameCount % this.aniSpeed ===0){
            this.sprite_number ++;
            this.sprite_number %= 2;
        }

    }

    // Lilla's movement across the screen will be controlled by the user.
    move(){
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
        }
    }

    // Prevents Lillia from moving off the screen. She will be inside a house, and can't move through walls, unlike the fairies. 
    inBounds(){
        if (this.pos.x <= 0) {
            this.pos.x = 0;
        }
        if (this.pos.y <= 0) {
            this.pos.y = 0;
        }
        if (this.pos.x >= width ) {
            this.pos.x = width;
        }
        if (this.pos.y >= height) {
            this.pos.y = height;
        }
    }
}