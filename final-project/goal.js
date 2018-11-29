class Goal {

    constructor(){
        this.size = width * .1;
        // this controls how close to have to be to reach the goal
        this.r = this.size / 2.5;
        this.x = width * .5;
        this.y = height * .5;
    }

    displayPortal(){

        fill(100);
        ellipse(this.x, this.y, this.size);
    }

}

