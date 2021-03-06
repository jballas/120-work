// Code modified from Dan Shiffman's Nature of Code
// [Shiffman, Dan. "Coding Challenge 61.1: Evolutionary Steering behaviors - Part 1." The Coding Train](https://www.youtube.com/watch?v=flxOkx0yLrY) 
// Instead of having having multiple objects I have one Enemy that is targeting a player. 
// github.com/shiffman/The-Nature-of-Code-Examples-p5.js/tree/master/chp06_agents/NOC_6_01_Seek


class Enemy {

    constructor(x,y) {
    
        this.position = createVector(x,y);
        this.velocity = createVector(0,-2 * this.deltaX);
        this.acceleration = createVector(0,0);
        this.size = 32;
        this.r = this.size / 2;
        this.maxspeed = 5;
        this.maxforce = 0.2;
        

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


    // Steering equation applied. Steering = desired - velocity 
    seek(target){
        let desired = p5.Vector.sub(target, this.position);

        desired.setMag(this.maxspeed)

        let steering = p5.Vector.sub(desired, this.velocity )
        steering.limit(this.maxforce);

        this.applyForce(steering);
    }

    // Displays the Enemy on screen
    display(){

        fill('red');
        ellipse(this.position.x, this.position.y, this.size);
    }

    gameOver(){

        let d = dist(this.position.x, this.position.y, player.pos.x, player.pos.y);
        let combinedR = this.r + player.radius;
        if (d <= combinedR){
            stroke(255)
            text('Game Over', width * .5, 50);
            noLoop();
        }
    }

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
