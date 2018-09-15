function setup(){
  createCanvas( 600, 600 );
  background( 50 );
}

function draw() {
 
  // hair in background
  
  fill('brown');
  noStroke();
  rect( 200, 200, 400, 400);
  
  push();
    
    fill(50);
    noStroke();
    arc( 60, 400, 400, 600, radians(270), radians(450) );
  
  pop();
  
  fill('brown');
  noStroke();
  ellipse( 425, 100, 500, 400 );

  // neck
  
  push();

    fill('blue');
    noStroke();
    quad( 280, 500, 600, 350, 600, 600, 400, 600 );

    fill('green');
    triangle( 280, 500, 600, 350, 400, 700 );

  pop();

  // head shape

  push();

    fill('yellow');
    translate( -20, 100 );
    rotate( radians (345));
    ellipse( 400, 250, 350, 500);

  pop();
  
  // face shading, should we try to drop in the light from outside?
  
  // hair highlights
  
  // Glasses left side
  
  // face shadows
  
  // chin
  
  // lips
  
  // Nose
  
  // Glasses right side
  
}
