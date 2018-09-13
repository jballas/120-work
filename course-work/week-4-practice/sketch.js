/* TODO: Practice, study each primitive shape

arc()
ellipse()
line()
point()
quad()
rect()
triangle()

*/

function setup(){
   createCanvas(800, 600); 
}


// Starting with the ellipse, I'm going to experiment with the shape.

function draw(){
    // after attempting to make 4 circles in a column, one on to of each other, I only made one long skinnny oval stretching from the top to lower.
    // These are ovelapping ellipses, and the center of the first one is off the screen, and each one after that pushes the drawing down a little. 
   ellipse(100, 10, 16, 160)
   ellipse(100, 26, 16, 160);
   ellipse(100, 48, 16, 160);
   ellipse(100, 64, 16, 160);
   ellipse(100, 80, 16, 160);   

   //I'm going to copy the above and try again to make 4 circles in a column
   //success!
   ellipse(130, 16, 16, 16)
   ellipse(130, 32, 16, 16);
   ellipse(130, 48, 16, 16);
   ellipse(130, 64, 16, 16);
   ellipse(130, 80, 16, 16);
   
}
