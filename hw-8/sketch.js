function setup() {
    createCanvas( windowWidth, 600);
    background(0);
}

function draw(){
    // set up triangle variables
    
    let centerX = 25;
    let centerY = 100;
    let rightX = 50;
    let rightY = 200;
    let leftX = 5;
    let leftY = 200;
    
    
    let c_Value = color(255, 200, 0);

    let angle = 0;

noCursor();

for (let flower_x = 25; flower_x < width; flower_x += 2) {
    // create a triangle that rotates

    translate(width * .5, width * .5);
    fill( c_Value );
    rotate (mouseX);
        triangle( flower_x, centerY, flower_x * .5, rightX , flower_x * 5, leftX);
}





}