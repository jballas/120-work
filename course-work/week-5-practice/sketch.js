function setup(){

    createCanvas( 600, 800 );
    background('blue');

}

function draw(){

    // create variables for triangle coordinates
    let centerX = 250;
    let centerY = 250;
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