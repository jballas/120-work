let player_x = 50;
let player_y = 50;
let size = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
	
	ellipse(player_x, player_y, size);
	
	move();
	//player_x ++;
}

function move(){
    if (keyIsDown (LEFT_ARROW) ) {

          player_x -=5;

      } if (keyIsDown(RIGHT_ARROW) ) {

          player_x += 5;

      } if (keyIsDown (UP_ARROW) ) {

          player_y -=5;

      } if (keyIsDown (DOWN_ARROW) ) {

          player_y +=5;
          
    }
  }