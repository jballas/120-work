let a = 50;

function setup (){
    createCanvas (windowWidth, 600)
}

function draw() {
    background(0);
    frameRate(10);


    ellipse( a, 50, 50);

    a++;

}