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

Unfortunately, I'm going to have to modify this to get my uniform flowers across the screen. I want them to have a grid of them 3 x 3, with different colors. Or I want a randomized pattern of them across the entire screen, also in different colors. Somehow I'm going to have to add an array to this project. Tricky.

###  Coding Conundrums

I finally solved my `for()` loop problem. After struggling forever to get my flowers in a grid shape I finally just used brute force code. I made one flower and copy and pasted it 9 times until I got everything exactly where I wanted.

![Flowers in a 3 x 3 grid](flowers_in_grid.PNG)

Then afterward I reviewed my numbers, and what was different from my `for()` loop. I noticed the numbers needed to increase by 200, and the `push()` and `pop()` were right next to the translate. Finally, I solved my mystery. One tiney change to the code made all the difference.

```JS
    // I want to make my flower repeat in a grid on the screen
    for( let x_pos = 100; x_pos < 600; x_pos +=200 ){
        for( let y_pos = 100; y_pos < 600; y_pos +=200){
            push();
                translate(x_pos, y_pos);
                drawFlower();
            pop();
        }
    } 
```

### A Colorful Array

![Colored Petals](colorful_flowers.PNG)

I added an array called `petal_colors []` and put inside rgba strings. I had the array working, but then I wanted to make a random element to the colors. I finally worked when I moved my variable to the drawFlower function, instead of having a global variable.



## Problems or Issues this week

I s

## Specific questions/concerns for next week
@ha


## Other Classmates Issues/discussions


## Conclusion
