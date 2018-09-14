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
   createCanvas(600, 1000); 
   background('#c8f1f9');
}


// Starting with the ellipse, I'm going to experiment with the shape.

function draw(){
    // after attempting to make 4 circles in a column, one on to of each other, I only made one long skinnny oval stretching from the top to lower.
    // These are ovelapping ellipses, and the center of the first one is off the screen, and each one after that pushes the drawing down a little.
   
    //I made sure the stroke and weight were thin and dark. For the beginning and later on changed them.
    
   noFill();
   stroke('black');
   strokeWeight(1);

   ellipse( 100, 10, 16, 160 );
   ellipse( 100, 26, 16, 160 );
   ellipse( 100, 48, 16, 160 );
   ellipse( 100, 64, 16, 160 );
   ellipse( 100, 80, 16, 160 );   

   //I'm going to copy the above and try again to make 4 circles in a column
   //success!
   ellipse(130, 16, 16, 16);
   ellipse(130, 32, 16, 16);
   ellipse(130, 48, 16, 16);
   ellipse(130, 64, 16, 16);
   ellipse(130, 80, 16, 16);

   // added points and made 4 of them in a rectangle shape
   // strokeWeight is used to make the points visible. Otherwise they are just small pixels. 
   strokeWeight(3); 
   point(20, 50);
   point(50, 50);
   point(20, 100);
   point(50, 100);

   //rounded corners on my rectangle, 10 is pretty standard, while 100 is very rounded like a label.

   // adding color

   fill('red');

   rect(10, 180, 500, 130, 100);
   //smaller rect inside the other one. It almost looks like a mouth.

   // add color over the top of others

   fill('gray');
   stroke('white');
   rect(100, 200, 300, 100, 100);
   // even small one with various corners. Its hard to get it centered. Now it's like a bandaid.

   fill('black');
   rect(150, 210, 200, 75, 10, 100, 5, 150);

   //triangle added with 6 parameters

   // adding color

   fill('yellow');
   triangle( 300, 10, 250, 100, 500, 50);

   //what is a line? It is a path between two points.
   line(150, 150, 500, 150);

   //What is a quad? A quadrilateral, 4sided polygon that does not have 90 degree angles. It needs 8 parameters.

   //adding color, and transparency. Reminds me of stained glass.

   fill( 255, 0, 255, 150 );
   quad(120, 600, 200, 250, 50, 400, 550, 750);


   //Added an arc, a half pie looks like a quarter to me.

   //Removed the stroke, and added in a fill, 

   fill(150)
   noStroke()
   arc(500, 500, 150, 150, 0, HALF_PI);
}
