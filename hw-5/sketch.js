 function setup(){
     createCanvas( 1000, 400);

     topX = 150
     topY = 15
 }

 function draw(){

    frameRate(5);
    // star shape

    strokeWeight(2);
    line( topX, topY, 15, 60 );
    line( topX, topY, 30, 30 );

    bezier( topX, topY, 200, 20, 5, 250, 10, 90 );

  //  background(0);

// topX = topX + 2 ;

  topY = topY * 2;
}