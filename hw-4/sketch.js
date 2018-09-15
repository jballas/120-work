function setup(){
  createCanvas( 600, 600 );
  background( 50 );
}

// I'm beginning my layout of my portrait, with basic shapes. using bright colors to identify parts of them. Then fix colors later. For now I'm focusing on the shapes. I have a photograph I put some filters and styles on to make it a "watercolor" to give me a basic layout.

function draw() {

// hair in background
// hair is in the far background, so I have to do that first, I has a curve to it that I will try to recreate with a rectangle and then an arc cut out. How else can you make a trapezoid shape?

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

  // The neck shape is basically a triangle, until I realized a quad would be better for the shadows, with a triangle for the hightlights.
  
  push();

    fill('blue');
    noStroke();
    quad( 280, 500, 600, 350, 600, 600, 400, 600 );

    fill('green');
    triangle( 280, 500, 600, 350, 400, 700 );

  pop();

  // head shape

  // My face is an oval shape, but its tilted in my mockup, so I have to figure out how to rotate it, just enough. 

  push();

    fill('yellow');
    translate( -20, 100 );
    rotate( radians (345));
    ellipse( 400, 250, 350, 500);

  pop();
  
  // face shading, should we try to drop in the light from outside?

 // Struggling with this part, the shading is arc, but how do I make that line up with the edge of the ellipse from above? Scaling the ellipse didn't work, so I went back to the arc and managed to make it align by using the same size as the ellipse. Still not quite working.

 /* todo
 -review my mockup
 -How does face shading layer with rest of features 
 -How can I do I make a curved line?
 -Can I made the arc smaller, but keep it aligned?

 */
  push();

    fill('black');
   // translate( 100, 150 );
  //  scale(.70);
    rotate( radians (345));
 //   ellipse( 400, 250, 350, 500);
     arc( 340, 360, 350, 500, radians(60), radians(240), CHORD );
  
  pop();
  

  // hair highlights
  
  // Glasses left side
  
  // face shadows
  
  // chin
  
  // lips
  
  // Nose
  
  // Glasses right side
  
}
