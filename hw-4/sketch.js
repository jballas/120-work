function setup(){
  createCanvas( 600, 600 );
  background( 50 );
}

// I'm beginning my layout of my portrait, with basic shapes. using bright colors to identify parts of them. Then will fix colors later. For now I'm focusing on the shapes. I have a photograph I put some filters and styles on to make it a "watercolor" to give me a basic layout.

function draw() {

// hair background

// hair is in the far background, so I have to do that first, I has a curve to it that I will try to recreate with a rectangle and then an arc cut out. How else can you make a curved shape?

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
    quad( 340, 450, 600, 350, 600, 600, 400, 600 );

    fill('green');
    stroke('red')
    triangle( 340, 450, 600, 350, 400, 700 );

  pop();

  // head shape

  // My face is an oval shape, but its tilted in my mockup, so I have to figure out how to rotate it, just enough. 

  push();

    fill('yellow');
    translate( -20, 100 );
    rotate( radians (345));
    ellipse( 400, 250, 350, 500);

  pop();
  
  // face shading
  
  // Struggling with this part, the shading is an arc, but how do I make that line up with the edge of the ellipse from above? Scaling the ellipse didn't work.

 // I went with the arc and made it smaller, and rotated it.

  push();

    fill(60);
    rotate( radians (345));
     arc( 355, 345, 355, 500, radians(75), radians(240), CHORD );
  
  pop();
  
  // hair highlights, do I still need these?

  // Glasses left side
  
  // Glasses need to be off to the side of the face, a rect with rounded corners might just work.

  push();

    fill(40);
    translate( -100, 50 );
    rotate( radians (345));
    rect( 220, 210, 130, 120, 35 ); 

  pop();
  
  // face/glasses shadows
  
  // this is going to be tricky. It is sort of a oval shape, but I need to add in more highlights over the top, including the nose and above the mouth and under the eye. 

  push();

  fill(80)
  translate( -80, 220);
  rotate( radians (335));
  ellipse( 350, 270, 170, 300 );

  pop();

  // Glasses right side

  // I copied the same specs as the left side, I just need to adjust where they are on the face.

  push();

  fill(40);
  translate( 20, 10 );
  rotate( radians (345));
  rect( 220, 210, 130, 120, 35 ); 

  //  the glasses have an arm extending from the right lense off the screen. So I have to add a skinny rect and rotate it
  
  rotate( radians (15));
  rect ( 350, 125, 250, 20 );
  pop();

    // chin shadow, appears to be an arc. But there is also the very bottom of the chin which is above the neck shadows.

    // the chin is giving me grief. I added in the curved part. That's alright, but the actual chin doesn't align with the neck at all. Maybe longer? and titlted? What if I do a shading effect, with like six or seven of them in different shades?

    // I am still updating the chin. I think it needs a mouth, and the coloring will help make it look like a chin and not just boxes.

  fill(30)
  arc( 315, 430, 100, 45, radians(260), radians(425), CHORD );
  rotate( radians(-15));
  //fill (60);
  //rect( 200, 510, 410, 10, 10 );
  fill(70);
  rect( 380, 480, 410, 20, 10 );
  fill(80);
  rect( 300, 500, 410, 20, 10 );
  fill(90);
  rect( 210, 520, 410, 20, 10 );
  fill(100);
  rect( 215, 540, 410, 10, 10 );
  fill(110);
  rect( 220, 550, 410, 10, 10 );
  fill(120);
  rect( 225, 560, 410, 10, 10 );
  fill(130);
  rect( 230, 570, 410, 10, 10 );
  fill(140);
  rect( 235, 580, 410, 15, 10 );

  // lip highlight

  // lips
  
  // Nose
  
  
}
