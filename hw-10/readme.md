Julia Ballas 50

[link]https:

# Week 10 Response

date

## Overview

## Projects

- 
- 

## Assignment

![original flower code](original_flower_code.PNG)
```JS
// flower code from previous sketch. I'm going to take this and make it a function for this week's homework.
push();
    translate( 200, 200);
    fill( 'rgba( 120, 20, 255, .40)' );
    rotate (mouseX);
    triangle( flower.center_x, flower.center_y, flower.right_x, flower.right_y, flower.left_x, flower.left_y );
pop();
```

## Step by Step Weekly Report

![drawFlower function repeats](more_flower_function.PNG)

I added a for loop, but I couldn't get it to call my drawFlower function until I used translate(). First taste of success. I'm getting closer to what I origainlly envisioned with this project!

Here's the code I added:

```JS
function draw(){
push();

    // I want to make my flower repeat all over the screen
    for( let i = 0; i < width; i+= 200){

        //I was able to use translate to make my drawFlower function repeat.
        translate( i, 200);
        drawFlower();
    

    } // end of for() loop
pop();

} // end of draw function
```


### 

1. 

## Problems or Issues this week

## Specific questions/concerns for next week

## Other Classmates Issues/discussions


## Conclusion
