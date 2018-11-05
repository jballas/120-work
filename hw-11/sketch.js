function setup() {
    createCanvas(400, 400);
}

//TODO Figure out what my class constructor parts might be, like every attribute for the popped corn, and the seed, I think. Including this one, of jumped
let jump = 100;


function draw() {

    background(0);

    frameRate(30);

// look, now I have lots of seeds, but they all move at the same time, and they are no longer in a function. drat.
//TODO make an empty array in global scope, then a for() in setup, and reference it in function for heatingUp.

    for( x = 150; x <= 300; x += 20){
        fill('rgb( 255, 150, 20)');
        ellipse( x, jump, 15, 30)   
    
    }


seed();
heatingUp();

    
poppedCorn();


}

function seed(){
// Seed
        fill('rgb( 255, 150, 20)');
        ellipse( 100, jump, 15, 30)   
}

function heatingUp(){
// random number so it doesn't jump constantly
let r = ceil(random(1,5));


// Seeds need to jump around, as if it's heating up
    if (r === 2) {
        jump ++;

        if( jump >= 110){
            jump = 100;
        }

    }

    //console.log(r);
}

function poppedCorn() {
    
    //popped corn
        fill(255)
        ellipse( 205, 205, 30, 45);
        ellipse(195, 225, 15, 15);
        ellipse(211, 225, 25, 20);
        ellipse(220, 215, 18, 18);
}