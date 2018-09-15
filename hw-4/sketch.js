function setup(){
  createCanvas( 600, 600 );
  background( 50 );
}

function draw() {
 
  // hair in background
  
  fill('brown');
  noStroke();
  rect( 300, 100, 300, 600);
  
  push()
    
    fill(0);
    noStroke();
    rotate( radians(90) );
    arc( 300, 300, 50, 50, PI, HALF_PI);
  
  pop()
  
  // neck
  
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
