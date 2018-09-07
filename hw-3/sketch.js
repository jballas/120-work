//Write and declare the setup function
function setup(){

    //create canvas 250 px wide x 250 px high
    createCanvas(200, 200);

    //color background changed to hexadecimal, I wanted it to be lilac.
    background('#C8A2C8');
}

//write and declare a draw function
function draw(){

    //write a statement to print the text string 'Hello World'
    //set the location parameters of x=75 and y=75; otherwise with the default settings the text does not show up on our canvas. 
    text('Hello World!', 75, 75);

}