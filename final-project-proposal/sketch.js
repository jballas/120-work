let player_init_x = 50;
let player_init_y = 50;
let player;

function setup() {
  createCanvas(400, 400);
  player = new Player(player_init_x, player_init_y);
    
}

function draw() {
  background(0);
	

    player.display();
    player.move();
    player.inBounds();
}
