function setup(){
  createCanvas( 600, 600 );
  background( 200 );
}

// I'm beginning with a basic layout of my portrait, with basic shapes, and using bright colors to identify parts, such as face and neck and hair. Later I will fix the colors. For now I'm focusing on the shapes. I have a photograph which I used some filters and styles on to make it a "watercolor". This is my mockup.

// I finished a basic layout, and adjusted the colors, but I'm still not satisfied with the face shape and especially the chin. So I reviewed my mockup and traced some of the shapes again. I'm going to try to change up the face to try and get the chin to work. Unfortunately, I'm concerned that this will effec the rotation and layout of everything else, but I won't be satisfied until I try.

// I attempted a few more details on the glasses, and tried to make a smile, but these didn't work out very well and I scraped the code. It came out like a poster or pop art, but I am satisfied.

function draw() {

// HAIR BACKGROUND ****************

// hair is in the far background, so I have to do that first. It has a curve to it that I will try to recreate with a rectangle and then an arc cut out. How else can you make a curved shape?

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

// NECK ****************

  // The neck shape is basically a triangle, but  I realized a quad would be better for the shadows, with a triangle for the hightlights.
  
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

// HEAD SHAPE ****************

  // My face is an oval shape, but its tilted in my mockup, so I have to figure out how to rotate it, just enough. 

  push();

    //fill('#ffd7af');
    fill( 'rgb(255, 150, 80)' );
    translate( 100, -100 );
    rotate( radians (375));
    ellipse( 400, 250, 375, 500);

  pop();
  
// FACE SHADING ****************
  
  // Struggling with this part: I'll try the shading as an arc, but how do I make that line up with the edge of the ellipse from above? Scaling the ellipse didn't work.

 // I went with the arc and made it smaller, and rotated it.

 // Adjusted the shading lower and bigger.

 // In the end I removed the brightest shading, and returned it to an ellipse shape.

  push();

    fill( '#ffc896');
    //translate( 80, -100 );
    //rotate( radians (385));
    ellipse (430, 180, 405, 550 );
    
        
    //arc( 330, 360, 365, 515, radians(30), radians(260), CHORD );
  
// EAR ****************

  // At first I was trying to make more shadows, but I turned this into an ear, thinking 'I might as well use the code for something.'

    fill(  'rgb(255, 150, 80)' );
    ellipse(600, 250, 60, 150 ); 
    fill(  'rgb(90, 50, 40)' );
    ellipse(605, 250, 30, 80 );


  pop();

// HAIR HIGHLIGHTS ****************

  // Do I still need these? YES! However, I didn't made them a seperate color, just the same brown.

  fill( '#3e1f00' );
  quad(300, 0, 600, 0, 600, 200, 550, 200 );


// I added hair to the left side of the face, behind the glasses. This helped define the face and made it not just an oval.
  
  push();

    fill('#3e1f00');
    rotate ( radians (-18));
    rect( 110, 250, 40, 300, 50 );

  pop();

// GLASSES left side ****************
  
  // The lenses need to be off to the side of the face; a rect with rounded corners might just work.

  push();

    fill(40);
    translate( -100, 50 );
    rotate( radians (345));
    rect( 220, 210, 130, 120, 35 ); 

    pop();
  
// GLASSES, right side ****************

  // I copied the same specs as the left side, Then I just  adjusted them on the face.

  push();
  
    fill(40);
    translate( 40, 10 );
    rotate( radians (345));
    rect( 220, 210, 130, 120, 35 ); 

  // The glasses have an arm extending from the right lense off the screen. So I have to add a skinny rect and rotate it
  
    fill(40);
    rotate( radians (15));
    rect ( 350, 125, 250, 20 );
   
  pop();

// CHIN SHADOW ****************

  //This appears to be an arc. But there is also the very bottom of the chin which is above the neck shadows.

  // the chin is giving me grief. I added in the curved part. That's alright, but the actual chin doesn't align with the neck at all. Maybe longer? and titlted? What if I do a shading effect, with like six or seven of them in different shades?

  // I am still updating the chin. I think it needs a mouth, and the coloring will help make it look like a chin and not just boxes. 

  // Ultimately, I ended up using my face shadow to give the impression on a rounded chin, with a little bit of a shadow to define it. That was by chance.

  // This is when I added in a rotate without adding in the push-pop sandbox, so the rest of my objects I didn't realized I'd already rotated.

  fill( 'rgb(255, 150, 80)' )
  arc( 320, 430, 100, 45, radians(245), radians(405), CHORD );
  
  rotate( radians(-15));

// LIPS ****************

    // I'm thinking an arc would best represent this shape.

    // how do I make myself smile? Its tricky, but I got a bit of a curved shape. I'm going to try another ellipse on top to really make it curve. Nope. Maybe a stroke? Nope.
  
  // TOP LIP

  push();

    fill( 'rgb(255, 10, 50)' );
    arc( 230, 450, 90, 45, radians(150), radians(375), CHORD );

  // BOTTOM LIP

    fill( 'rgb(255, 50, 80)' );
    arc( 230, 455, 90, 35, radians(-40), radians(190) );

  pop();

// NOSE  ****************

  // a simple triangle, except for the shadow underneath

  fill('#ffc896');
  stroke(255);
  strokeWeight(3);
  triangle( 250, 245, 265, 345, 155, 335);
  fill( 'rgb(255, 150, 80)' );
  stroke( '#ffc896');
  triangle( 165, 337, 265, 345, 255, 365);

// GLASSES, bridge ****************

// I need to connect the two lenses, otherwise the nose sticks out funny,

  fill(40);
  noStroke();
  rotate( radians(15));
  translate( 50, -70);
  rect(220, 240, 50, 20);

}