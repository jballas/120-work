 function setup(){
     createCanvas( windowWidth, 600);

}

var sunX = 400;
var sunY = 400;

 function draw(){

    //moved background to draw, so sun moves clearly across the sky.
    background( 'rgb(5, 4, 255)');

    // added variables on the building
    var buildingX = windowWidth / 2;
    var buildingY = windowHeight / 2;

    frameRate(15);

    // sunrise
    
        push();

            sunX = sunX - 1 * 2;
            sunY = sunY - 1 ;

            strokeWeight(10);
            stroke('orange');
            fill( 'yellow' );
            ellipse( sunX, sunY, 200, 200 );

        pop();

    // horizon added
    fill(0);
    rect(0, 400, windowWidth, 600);

    //Clouds controlled by MouseY
    
    push();
        stroke(200);
        strokeWeight(3);
        fill(255);
        ellipse( 4, mouseY, 100, 50);
        ellipse( 160, mouseY, 220, 110);
        ellipse( 280, mouseY + 40, 180, 9);
        ellipse( 20, mouseY - 3, 400, 25);
    pop();

    // mountains added
    fill(0);
    triangle( 100, 300, 350, 400, 0, 600 );
    triangle( 0, 300, 350, 400, 0, 600 );
    triangle( 440, 300, 500, 400, 0, 600 );
    triangle( 540, 300, 800, 600, 0, 600 );

    // ground added
    fill( 'rgb(40, 40, 0)' );
    rect(0, 500, windowWidth, 200);

    // roadway
    fill(50);
    rect(0, 500, windowWidth, 15);    

    // car
    fill( 'rgb(255, 255, 0 )');
    rect( mouseX, 490, 45, 25, 4);
    fill(0);
    ellipse( mouseX + 2, 508, 15, 15, );
    ellipse( mouseX + 45, 508, 15, 15, );

    // main building
    fill(50);
    rect( buildingX, buildingY, 200, 500 );

    // adjusting location of windows using simple math
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

    }