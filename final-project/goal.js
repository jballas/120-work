class Goal {

    constructor(){
        this.size = width * .10;
        // this controls how close to have to be to reach the goal
        this.r = this.size * .6;
        this.x = width * .5;
        this.y = height * .5;

    }

    displayPortal(){

        push();
            //image( portal_img, this.x, this.y)
            
            fill('rgb(200,100,20)');
            ellipse(this.x, this.y, this.size);
            fill(100)
        pop();
    }

}

