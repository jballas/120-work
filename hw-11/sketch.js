function setup() {
    createCanvas(400, 400);
}

let jump = 100;


function draw() {

    background(0);

    frameRate(30);

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

    console.log(r);
}

function poppedCorn() {
    
    //popped corn
        fill(255)
        ellipse( 205, 205, 30, 45);
        ellipse(195, 225, 15, 15);
        ellipse(211, 225, 25, 20);
        ellipse(220, 215, 18, 18);
}