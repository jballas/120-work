let net = [];
let wiggler = [];

function setup(){
    createCanvas( 600, 600);

   
    for (let i = 0; i < 10; i ++ ){
        net.push( ceil( random(40, 50)) )
    
        wiggler.push(new Wiggler());
    }

    console.log(net);
}

function draw(){
    frameRate(30);
    background(0); 

    for( i = 0; i < net.length; i ++){

        wiggler[i].frame(net[i]);
       // let wiggler = new Wiggler();
    }
  
}


class Wiggler {

    constructor(){

        this.xPos = 1;
        this.yPos = 1;
        this.bodyColor ='rgba(0, 255, 20, .40)';
        this.random_x = 0;
        this.random_y = 0;


    }

    frame(index){
        this.displayBody(index);
        this.move();
        this.nextAppears();

    }

    //wiggler body
    displayBody(index){
        push();
            translate( this.random_x, this.random_y);

            fill(this.bodyColor );
            
            //for (let i = 0; i < 10; i ++ ){
                ellipse(i * 50 + this.xPos, index + this.yPos, 50);
            //}
        pop();
    }

    //sideways and vertical movement
    move(){
        this.xPos +=10;
        this.yPos = random(-2, 2) ;
    }


    // Next wiggler appears
    nextAppears(){
        if (this.xPos >= width){
            this.xPos = -500;
           //this.random_y = ceil( random(height));
        }

        //console.log(this.random_y);
    }

}