function setup() {
    createCanvas(400, 400);
}

let jump = 100;

function draw() {

    background(0);

    frameRate(30);

    // Seed
    fill('rgb( 255, 150, 20)');
    ellipse( jump, jump, 15, 30)

    jump ++;

    if (jump >= width) {
        jump = jump * -1;
    }

    //popped corn
    fill(255)
    ellipse( 205, 205, 30, 45);
    ellipse(195, 225, 15, 15);
    ellipse(211, 225, 25, 20);
    ellipse(220, 215, 18, 18);

}