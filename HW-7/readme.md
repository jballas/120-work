Julia Ballas, 50

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

<!--
--This is a Comment Block--

Please describe what the original code is doing.

Why is it working the way it is?
What does each line do?
How can you make the ball change direction?

-->
The original code of the bouncing ball begins with the simple premise of an ellipse moving across the screen at an angle.

```JS
ball.x += ball.delta_x * ball.scale_x; // creates the angular movement of ball.x variable
ball.y += ball.delta_y * ball.scale_y; // create the angular movement of ball.y variable
```

 Then it uses an `if()` statement to change the angle by multiplying by -1, which effectively reverses it. This is how the ball changes directions.

 The first `if()` statement keeps the ball.x within the width of the canvas by using a greater than less than symbol. The second `if()` does the same thing, but the y coordinate and keeps the ball within the height of the canvas.

```JS
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x; //multiplying by -1 to keep ball within width of canvas
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y; //multiplying by -1 to keep ball within height of canvas
    }
```

Where the code really gets interesting is with `mousePressed()` function, which effects the ball.scale_x and ball.scale_y variable.

 The ball.scale_x variable is assigned a new value using the `map()` function. It takes the value of `mouseX` and changes its output range from 0 to the width of canvas, and reduces it to a range of 0,.5 to 10. The ball.scale effects the ball.x variable as shown in the code from line21 and line22.

If you click your mouse of the top upper left, where it is closest to 0,0, then the 'speed' of the ball slows considerable. However, clicking toward the bottom right corner the speed increases.

```JS
function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
```

## How did you alter the sketch?

<!--
Please describe how and why you changed the sketch?
-->

### First Experiment: `pMouse()` added

According to the **Makep: Getting Started with p5.js** by Lauren Mccarthy, "the `pmouseX()` and `pMouseY()` variables store the position of the mouse at a previous frame". I'm going to add try to put these variable in the code, and move the background to the `draw()` function.

```JS
function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, pmouseX, 10);
    ball.scale_y = map(mouseY, 0, height, pmouseY, 10);
}
```
The speed of the ball was out of control as soon as I clicked too far to the left.

##