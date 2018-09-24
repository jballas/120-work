 function setup(){
     createCanvas( windowWidth, 600);

}


var sunX = 400;
var sunY = 400;

 function draw(){

    //moved background to draw
    background( 'rgb(5, 4, 255)');

    // added variables on the building
    var buildingX = windowWidth / 2;
    var buildingY = windowHeight / 2;

    frameRate(15);

// sunrise
    
push();

sunX = sunX - 1 * 2;
sunY = sunY - 1 ;

fill( 'green')
ellipse( sunX, sunY, 75, 75 );

strokeWeight(10);
stroke('orange');
fill( 'yellow' );
ellipse( sunX, sunY, 200, 200 );

pop();


    // horizon added
    fill(0);
    rect(0, 400, windowWidth, 600);

    // mountains added

    fill(0);
    triangle( 100, 300, 350, 400, 0, 600 );
    triangle( 0, 300, 350, 400, 0, 600 );
    triangle( 440, 300, 500, 400, 0, 600 );
    triangle( 540, 300, 800, 600, 0, 600 );

    // yard added

    fill( 'brown' );
    rect(0, 500, windowWidth, 600);


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

    
    // spotlight
    fill( 'rgb(255, 255, 0 )');
    rect( mouseX, 490, 45, 25, 4);
    fill(0);
    ellipse( mouseX + 2, 508, 15, 15, );
    ellipse( mouseX + 45, 508, 15, 15, );
    }