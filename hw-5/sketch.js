 function setup(){
     createCanvas( windowWidth, 600);


    
      }

 function draw(){

    //moved to draw
    background( 'rgb(5, 4, 255)');

    // added variables on the building
    var buildingX = windowWidth / 2;
    var buildingY = windowHeight / 2;

    frameRate(10);

    // horizon added
    fill(0)
    rect(0, 400, windowWidth, 600);

    // main building
    fill(50);
    rect( buildingX, buildingY, 200, 500 );

    // adjusting location of window using simple math
    buildingX = buildingX + 25;

    buildingY = buildingY + 25;

    // first window
    fill(75);
    rect( buildingX , buildingY, 50, 50 );

    push();

        // moving location of second window
        translate(100, 50)
        fill(75);
        rect( buildingX , buildingY, 50, 50 );

    pop();

    fill( 'rgba(255, 255, 0, .50)');
    ellipse( mouseX, mouseY, 50, 50)
 }