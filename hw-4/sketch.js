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

    fill(0);
    //noStroke();
    triangle( 500, 300, 350, 600, 600, 600 );

  pop();

  // head shape
  
  // face shading, should we try to drop in the light from outside?
  
  // hair highlights
  
  // Glasses left side
  
  // face shadows
  
  // chin
  
  // lips
  
  // Nose
  
  // Glasses right side
  
}
