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
The original code of the bouncing ball has a simple premise. You see an ellipse moving across the screen at an angle, but when you click on your mouse you can change how it moves. This depends on where you mouse is on the screen.

Here is the code that creates the inital movement:

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

Where the code really gets interesting is with the `mousePressed()` function, which effects the ball.scale_x and ball.scale_y variable.

 The ball.scale_x variable is assigned a new value using the `map()` function. It takes the value of `mouseX` and changes its output range from 0 to the width of canvas, and reduces that to a range of 0.5 to 10.

```JS
function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
```

What does this code do? It effects the speed of your ball.

If you click your mouse of the top upper left, where it is closest to 0,0, then the 'speed' of the ball slows considerable. However, clicking toward the bottom right corner the speed increases.

## How did you alter the sketch?

<!--
Please describe how and why you changed the sketch?
-->

I ended up changing three different parts of it. In this order.

1. added grayscale color
2. shape
3. a reset option with `keyIsPressed()`

### Adding a grayscale

![Added grayscale to part of the canvas](screenshot_grayscale.PNG)

By adding an `if()` statement below the ellipse, I changed the color of the ball within a certain range.

```JS
    if (ball.x >= 100 && ball.x <= 200) {
        stroke(255);
        colBlack = 0;
    } else if ( ball.x >= 200 && ball.x <= 300) {
        stroke(200);
        colBlack = 100;
    }else {
        stroke(0);
        colBlack = 255;
    }
 ```

### Shape

At first I tried changing to a rectangle, instead of an ellipse.  This reminded me of a card game, but it wasn't different enough from the orignal code.

![sketch with rectangles](screenshot_card_game.PNG)

Then I changed the shape to a line, since that also only requires four parameters and it, and I was surprised at the difference. You can control the length of the line by where you click, and it sweeps back and forth like a spotlight.

![final sketch](screenshot_final_searchlights.PNG)

### Reset

Because the line tends to blend too much, and the black overlaps, I wanted to have a reset option. If you've made the line sweep up by clicking toward the right side of the screen, then it continues with this speed even after you click reset. 

I added text to make this option clear to anyone viewing the sketch.

## Frustrations this week

I found working with someone else code very difficult. It was already using mouseX, so I could effectively use that in my alterations. So, I tried adding another shape.

### Experiment Adding a `rect()`

I added in a rectangle that was attached to mouseX and move side to side. I wanted to make the ball bounce off my rectangular, like a pong game, and it almost worked. I added another this `if()` statement:

```JS
   if (ball.x >= block.y) {
        ball.delta_y = -1 * ball.delta_y;
    }
```

But it did not really work and I ultimately abandoned that idea. It was too complicated to make it a game, and sometimes the ball got stuck on screen or actually disappeared off screen.

## Conclusions