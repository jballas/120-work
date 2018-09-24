function setup(){

    createCanvas( 600, 800 );
    background('blue');

}

function draw(){


    // create variable for center of triangle connections
    let centerX = 250;
    let centerY = 250;
    let rightX = 350;
    let rightY = 150;
    let leftX = 50;
    let leftY = 150;
    let bottomLeftX = 50;
    let bottomLeftY = 450;
    let bottomRightX = 350;
    let bottomRightY = 400;

    strokeWeight(3);
    fill( 'rgba( 255, 0, 130, .60)' );
    triangle( rightX, rightY, centerX,  centerY, bottomRightX, bottomRightY );

    fill( 'rgb( 0, 0, 130 )' );
    triangle( leftX, leftY, centerX, centerY, bottomLeftX, bottomLeftY );

    
    fill( 'rgba(5, 255, 0, .60 )' );
    triangle( leftX, leftY, rightX, rightY, centerX, centerY );

    fill( 'rgba(0, 255, 255, .50 )');
    triangle( centerX, centerY, bottomRightX, bottomRightY, bottomLeftX, bottomLeftY );
}