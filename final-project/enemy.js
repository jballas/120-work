// Code modified from Dan Shiffman's Nature of Code
// [Shiffman, Dan. "Coding Challenge 61.1: Evolutionary Steering behaviors - Part 1." The Coding Train](https://www.youtube.com/watch?v=flxOkx0yLrY) 
// I have Enemies that are targeting a player. It's game over if they reach the player. 
// github.com/shiffman/The-Nature-of-Code-Examples-p5.js/tree/master/chp06_agents/NOC_6_01_Seek


class Enemy {

    constructor(x,y, img) {
    
        this.position = createVector(x,y); 
        this.velocity = createVector(0,-2 * this.deltaX);
        this.acceleration = createVector(0,0);
        
        this.image = img;

        // Size of enemy sprite sheet
        this.size = {
            w: 32,
            h: 32
        }
        this.animateSpeed = 10; // This is animation speed
        this.sprite_number = 0;
        this.subRect = [
            [0,0],
            [32,0]
        ]

        this.r = this.size.w * .5; // the size of Enemy's capture radius.
        this.maxspeed = 5;
        this.maxforce = 0.2;
    }

    frame(target){
        this.display(); // displays the enemies on screen
        this.animate(); // animate's the enemy sprite
        this.seek(target); // This uses the enemy's steering to seek out the target
        this.update(); // This controls how the enemy moves: the velocity and acceleration
        this.gameOver();
    }
    
    // Displays the Enemy on screen
    display(){

        push();
            
            imageMode(CENTER);
            image(this.image,
                this.position.x, this.position.y,
                this.size.w, this.size.h,
                this.subRect[this.sprite_number][0], this.subRect[this.sprite_number][1],
                this.size.w, this.size.h
            );
        pop();
        
        // for testing the game-over hit box.
        //ellipse(this.position.x,this.position.y,this.size.w,this.size.h);
    }

    // Animate the enemy sprite
    animate(){

        if(frameCount % this.animateSpeed === 0){
            this.sprite_number ++;
            this.sprite_number %= 2;
        }
    }

    // Steering equation applied. Steering = desired - velocity 
    seek(target){
        let desired = p5.Vector.sub(target, this.position);

        desired.setMag(this.maxspeed)

        let steering = p5.Vector.sub(desired, this.velocity )
        steering.limit(this.maxforce);

        this.applyForce(steering);
    }

    // Creates an update function that will update my vector variables.
    update(){
        this.position.add (this.velocity);
        this.velocity.add (this.acceleration);
        this.velocity.limit (this.maxpseed);
        this.acceleration.mult(0);
    }


    applyForce(force) {
        this.acceleration.add(force);
    }

    gameOver(){

        let d = dist(this.position.x, this.position.y, player[0].pos.x, player[0].pos.y);
        let combinedR = this.r + player[0].radius;
        if (d <= combinedR){
            
            //Stop the game background music
            game_bg_music.stop();

            // Play the Game Over sound
            game_over_sound.play();

            stroke(255);
            textSize(50);
            text('Game Over', width * 0.5, height * 0.5 );
            noLoop();
        }
    }

    // Function to keep the enemies movements erratic, and to prevent them from swarming the player. If they touch each other they are transported back to the location. Code modified from Dr. Musick's
    avoidOthers(otherEnemies, myId){
        for (let n = 0; n < otherEnemies.length; n++) {
            // if n != myId, then check for touching
            // otherwise, its ME and we need to skip
            if (n != myId) {
                let d = dist(this.position.x, this.position.y, otherEnemies[n].position.x, otherEnemies[n].position.y);
                let combinedR = this.r + otherEnemies[n].r;

                if (d <= combinedR) {
                    this.position.x = abs( random(width/2, width) );
                    this.position.y = abs (random( height/2, height) );
                }
            }
        }
    }
}
