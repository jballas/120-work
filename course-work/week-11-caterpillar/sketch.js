let bugs = [];
let how_many_bugs = 30;


function setup(){
    createCanvas( windowWidth, 600);

    for (let i = 0; i < how_many_bugs; i ++ ){
        bugs.push( new Caterpillar() );
    }

}


function draw(){
    frameRate(20);

    background(0);
    //translate( width * .25, height* .25);
    for(let i = 0; i < bugs.length; i ++){
        bugs[i].frame();
    }

}
