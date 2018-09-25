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

    push();

    // this makes both yellow and the red car zoom forward
    mouseX = mouseX + (mouseX * .90);

    // Can I make one car to drive backwards? 
        //Invert mouse
        //mouseX = width - mouseX;

    
        fill( 'rgb(255, 25, 0 )');
        rect( mouseX + 200, 475, 45, 25, 4);
        fill(0);
        ellipse( mouseX + 202, 495, 15, 15, );
        ellipse( mouseX + 245, 495, 15, 15, );

    pop();

    // car

    push();

        fill( 'rgb(255, 255, 0 )');
        rect( mouseX - 50, 485, 45, 25, 4);
        fill(0);
        ellipse( mouseX - 48, 505, 15, 15, );
        ellipse( mouseX -5 , 505, 15, 15, );

    pop();
     
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