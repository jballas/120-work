<<<<<<< HEAD
let bugs = [];
let how_many_bugs = 30;


function setup(){
    createCanvas( windowWidth, 600);

    for (let i = 0; i < how_many_bugs; i ++ ){
        bugs.push( new Caterpillar() );
    }

}

=======
let circleSize = [];
let how_many  = 20;

function setup(){
    createCanvas( windowWidth, 600);
 
    for( i = 0; i < how_many; i += 50){
        circleSize.push (new Spinner() );
    }

}


function draw(){
    background(0);  
    frameRate(2);

    translate( width/4, height/4);

    let spring = ceil( random(40, 50) );

for (let i = 0; i < circleSize.length; i++){
    circleSize[i].frame( 50, 50, spring)
}

    console.log(spring);

}


class Spinner {

    constructor(){
        this.size = ceil( random(50,400) );
        this.jump = 500;
        
    }

    frame(x,y,size){
        this.display(x,y,size);

    }
>>>>>>> parent of 633ebf8... week-11 - circles

function draw(){
    frameRate(20);

    background(0);
    //translate( width * .25, height* .25);
    for(let i = 0; i < bugs.length; i ++){
        bugs[i].frame();
    }

}
