var bgColor= 0;

function setup(){

    createCanvas( 600, 800 );

    // Making background color a variable, so we can try to change the color overtime
}

function draw(){

    // background moved to draw section so it will be redrawn everytime I move my mouse
    background( bgColor );

    // Changed background color to gradually lighten
       bgColor = bgColor + 1;

    // followed Dr Musick's code, using the modulo to make the background loop through the grayscale spectrum
       bgColor = bgColor % 255

    // Lastly changed the Framerate so the background  has a slower movement. It doesn't really effect the animation of the pyramid at this rate.

    frameRate(30);

    // create variables for triangle coordinates
    let centerX = mouseX;
    let centerY = mouseY;
    let topRightX = 350;
    let topRightY = 150;
    let topLeftX = 50;
    let topLeftY = 150;
    let bottomLeftX = 50;
    let bottomLeftY = 450;
    let bottomRightX = 350;
    let bottomRightY = 400;

    //Four connecting triangles makes a 3D pyramid shape
    strokeWeight(3);
    fill( 'rgba( 255, 0, 130, .60)' );
    triangle( topRightX, topRightY, centerX,  centerY, bottomRightX, bottomRightY );

    fill( 'rgb( 0, 0, 130 )' );
    triangle( topLeftX, topLeftY, centerX, centerY, bottomLeftX, bottomLeftY );

    
    fill( 'rgba(5, 255, 0, .60 )' );
    triangle( topLeftX, topLeftY, topRightX, topRightY, centerX, centerY );

    fill( 'rgba(0, 255, 255, .50 )');
    triangle( centerX, centerY, bottomRightX, bottomRightY, bottomLeftX, bottomLeftY );

}