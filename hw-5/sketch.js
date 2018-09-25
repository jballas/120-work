function setup(){
     createCanvas( windowWidth, 600 );

}

// added variables for the location of the sun, a global scope
var sunX = 400;
var sunY = 400;

 function draw(){

    //moved background to draw function, so sun moves clearly across the sky.
    background( 'rgb(5, 4, 255)');

    // added variables on the building
    var buildingX = windowWidth / 2;
    var buildingY = windowHeight / 2;

    // adjust frame rate of animation
    frameRate(15);

    // cursor removed
    noCursor();


    // sunrise
    
    push();

        sunX = sunX - 1 * 2;
        sunY = sunY - 1 ;

        strokeWeight(10);
        stroke( 'orange' );
        fill( 'yellow' );
        ellipse( sunX, sunY, 200, 200 );

    pop();

    
    // horizon added
    fill(0);
    rect( 0, 400, windowWidth, 600 );


    //Clouds controlled by MouseY
    
    push();
        stroke(200);
        strokeWeight(3);
        fill(255);
        ellipse( 4, mouseY, 100, 50 );
        ellipse( 160, mouseY, 220, 110 );
        ellipse( 280, mouseY + 40, 180, 9 );
        ellipse( 20, mouseY - 3, 400, 25 );
    pop();


    // mountains added
    fill(0);
    triangle( 100, 300, 350, 400, 0, 600 );
    triangle( 0, 300, 350, 400, 0, 600 );
    triangle( 440, 300, 500, 400, 0, 600 );
    triangle( 540, 300, 800, 600, 0, 600 );


    // ground added
    fill( 'rgb(40, 40, 0)' );
    rect( 0, 500, windowWidth, 200 );


    // roadway
    fill(50);
    rect( 0, 500, windowWidth, 15 );    


    // Red car
    push();

    // This makes both yellow and the red car into speeding cars.
    mouseX = mouseX + (mouseX * .70);

    // A simplier equation only accelerates their movement forward, and doesn't cause the same speeding effect.
    //mouseX = mouseX * .70;

    // Can I make one car drive backwards? 
    //Invert mouse: trick discovered at p5js.org/assets/learn/interactivity/
    //mouseX = width - mouseX;

    
        fill( 'rgb(255, 25, 0 )');
        rect( mouseX + 200, 475, 45, 25, 4 );
        fill(0);
        ellipse( mouseX + 202, 495, 15, 15, );
        ellipse( mouseX + 245, 495, 15, 15, );

    pop();


    // Yellow car

    push();

    // Changed rate of yellow car's speed so they will sometimes overlap
    mouseX = mouseX + (mouseX * .20);

        fill( 'rgb(255, 255, 0 )');
        rect( mouseX - 50, 485, 45, 25, 4 );
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
        translate( 100, 50 )
        fill(75);
        rect( buildingX , buildingY, 50, 50 );

    pop();

}