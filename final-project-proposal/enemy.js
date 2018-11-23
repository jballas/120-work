// Code modified from Dan Shiffman's Steering Behaviors
// [Shiffman, Dan. "Coding Challenge 59: Steering Behaviors." The Coding Train](https://www.youtube.com/watch?v=4hA7G3gup-4) 
// Instead of having having multiple objects I have one Enemy that is targeting a player. 

function Enemy(x,y, targetX, targetY){
    this.position = createVector(x,y);
    this.target = createVector(targetX,targetY); 
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector();
    this.size = 32;
    this.r = this.size / 2;
    this.maxspeed = 5;
    this.maxforce = 0.3;

}

Enemy.prototype.behaviors = function(){
    let seek = this.seek(this.target);
    this.applyForce(seek);
}

Enemy.prototype.applyForce = function(f){
    this.acceleration.add(f);
}

// Creates an update function that will update my variables.
Enemy.prototype.update = function(){
    this.position.add (this.velocity);
    this.velocity.add (this.acceleration);
    this.acceleration.mult(0);
}

// Displays the Enemy on screen
Enemy.prototype.show = function(){

    ellipse(this.position.x, this.position.y, this.size);
}

// Steering equation applied. Steering = desired - velocity 
Enemy.prototype.seek = function(target){
    let desired = p5.Vector.sub(target, this.position)

    desired.setMag(this.maxspeed)

    let steering = p5.Vector.sub(desired, this.velocity)
    steering.limit(this.maxforce);
    return steering;
}
