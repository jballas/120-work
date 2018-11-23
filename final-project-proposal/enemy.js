function Enemy(x,y, targetX, targetY){
    this.position = createVector(x,y);
    this.target = createVector(targetX,targetY); 
    this.velocity = createVector();
    this.acceleration = createVector();
    this.size = 32;
    this.r = this.size / 2;

}

Enemy.prototype.update = function(){
    this.position.add (this.velocity);
    this.velocity.add (this.acceleration);
}

Enemy.prototype.show = function(){

    ellipse(this.position.x, this.position.y, this.size);
}