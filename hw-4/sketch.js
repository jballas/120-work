function setup(){
  createCanvas( 600, 600 );
  background( 200 );
}

// I'm beginning my layout of my portrait, with basic shapes. using bright colors to identify parts of them. Then will fix colors later. For now I'm focusing on the shapes. I have a photograph I put some filters and styles on to make it a "watercolor" to give me a basic layout.

// I finished a basic layout, and adjusted the colors, but I'm still not satisfied with the face shape and especially the chin. So I reviewed my mockup and traced some of the shapes again. I'm going to try to change up the face to try and get the chin to work. Unfortunately, I'm concerned that this will effec the rotation and layout of everything else, but I won't be satisfied until I try.

//todo: highlight on left lens. Can I make myself smile? What about those face shadows? Or hair shadow. Lastly, any strands of hair sticking out?

function draw() {

// hair background

// hair is in the far background, so I have to do that first, I has a curve to it that I will try to recreate with a rectangle and then an arc cut out. How else can you make a curved shape?

  fill( '#3e1f00' );
  noStroke();
  rect( 200, 200, 400, 400);
  
  push();
    
    fill(200);
    noStroke();
    arc( 60, 400, 400, 600, radians(270), radians(450) );
  
  pop();
  
  fill('#3e1f00');
  noStroke();
  ellipse( 425, 100, 500, 400 );

// neck

  // The neck shape is basically a triangle, until I realized a quad would be better for the shadows, with a triangle for the hightlights.
  
  push();

    fill('#3e1f00');
    noStroke();
    quad( 340, 450, 600, 350, 600, 600, 400, 600 );

    fill('#512b13');
    stroke('#3e1f00')
    triangle( 340, 450, 590, 350, 400, 700 );

    fill( 'rgb(255, 170, 90)' );
    stroke('#512b13')
    triangle( 350, 460, 600, 340, 400, 650 );

  pop();

// head shape

  // My face is an oval shape, but its tilted in my mockup, so I have to figure out how to rotate it, just enough. 

  push();

    //fill('#ffd7af');
    fill( 'rgb(255, 150, 80)' );
    translate( 100, -100 );
    rotate( radians (375));
    ellipse( 400, 250, 375, 500);

  pop();
  
// face shading
  
  // Struggling with this part: I'll try the shading as an arc, but how do I make that line up with the edge of the ellipse from above? Scaling the ellipse didn't work.

 // I went with the arc and made it smaller, and rotated it.

 // Adjusted the shading lower and bigger.

 // Now I've removed the brightest shading, and returned to an ellipse shape.

  push();

    fill( '#ffc896');
    //translate( 80, -100 );
    //rotate( radians (385));
    ellipse (430, 180, 405, 550 );
    
        
    //arc( 330, 360, 365, 515, radians(30), radians(260), CHORD );
  
  // Turned this into an ear, might as well use the code for something. 
    fill(  'rgb(255, 150, 80)' );
    ellipse(600, 250, 60, 150 ); 
    fill(  'rgb(90, 50, 40)' );
    ellipse(605, 250, 30, 80 );


  pop();

// hair highlights, do I still need these? YES!

  fill( '#3e1f00' );
  quad(300, 0, 600, 0, 600, 200, 550, 200 );



// adjustments to left side of face, adding hair shadows
  
    push();

    fill('#3e1f00');
    rotate ( radians (-18));
    rect( 110, 250, 40, 300, 50 );

  pop();

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

  /*fill( '#ffb464');
  translate( -80, 220);
  rotate( radians (335));
  ellipse( 380, 290, 250, 300 );

  */
 
  pop();

// Glasses right side

  // I copied the same specs as the left side, I just need to adjust where they are on the face.

  push();

  fill(40);
  translate( 40, 10 );
  rotate( radians (345));
  rect( 220, 210, 130, 120, 35 ); 

  // The glasses have an arm extending from the right lense off the screen. So I have to add a skinny rect and rotate it
  
  rotate( radians (15));
  rect ( 350, 125, 250, 20 );
  pop();

// chin shadow, appears to be an arc. But there is also the very bottom of the chin which is above the neck shadows.

    // the chin is giving me grief. I added in the curved part. That's alright, but the actual chin doesn't align with the neck at all. Maybe longer? and titlted? What if I do a shading effect, with like six or seven of them in different shades?

    // I am still updating the chin. I think it needs a mouth, and the coloring will help make it look like a chin and not just boxes.

  fill( 'rgb(255, 150, 80)' )
  arc( 320, 430, 100, 45, radians(245), radians(405), CHORD );
  
  rotate( radians(-15));
  
  /*
  
  //fill (60);
  //rect( 200, 510, 410, 10, 10 );
  fill( '#ffe1e1' );
  rect( 380, 480, 410, 20, 10 );
  fill( 'rgb(130, 85, 0)' );
  rect( 300, 500, 410, 20, 10 );
  fill( 'rgb(140, 95, 0)' );
  rect( 210, 520, 410, 20, 10 );
  fill( 'rgb(150, 100, 0)');
  rect( 215, 540, 410, 10, 10 );
  fill(110);
  rect( 220, 550, 410, 10, 10 );
  fill(120);
  rect( 225, 560, 410, 10, 10 );
  fill(130);
  rect( 230, 570, 410, 10, 10 );
  fill(140);
  rect( 235, 580, 410, 15, 10 );
 
*/

// lip highlight

  // This occurs above the lips, so it must incorporate the lips as well and align on top of the face shape, below the nose.

  /*
  push();

    fill( 'rgb(255, 150, 80)' );
    //translate( -80, -220 );
    //rotate( radians(-5));
    //scale( 1.5, 3.0);
    ellipse( 230, 440, 100, 80 );

  pop(); 
*/

// lips

    // I'm thinking an arc would best represent this shape.
  
  //top lip
  fill( 'rgb(255, 10, 50)' );
  arc( 230, 455, 80, 45, radians(180), radians(360), CHORD );
  rect( 190, 440, 50, 20, 3 );

  //bottom lip
  fill( 'rgb(255, 50, 80)' );
  arc( 230, 455, 80, 45, radians(0), radians(180), CHORD );
  rect( 190, 456, 30, 20, 5 );


// Nose

// a simple triangle, except for the shadow underneath

fill('#ffc896');
stroke(255);
strokeWeight(3);
triangle( 250, 245, 265, 345, 155, 335);
fill( 'rgb(255, 150, 80)' );
stroke( '#ffc896');
triangle( 165, 337, 265, 345, 255, 365);

// glasses, bridge

// I need to connect the two lenses, otherwise the nose sticks out funny,

fill(40);
noStroke();
rotate( radians(15));
translate( 50, -70);
rect(220, 240, 50, 20);


}