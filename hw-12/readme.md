Julia Ballas 50

[Week 12: Spirals](https://jballas.github.io/120-work/hw-12/index.html)

# Week 12 Response

date 11-14-18

## Overview

This week we continued our study of OOP, and the goal was to have our objectsbe aware of and interact with each other. 

## Projects

- butterflies
- caterpillar
- wiggler
- hw-12: Spirals

## Assignment

Create a sketch with objects that interact with each other.

## Weekly Report

### Butterflies

Flapping wings was my first goal this week. This quickly progressed into a butterfly, then multiple butterflies and a class called Butterfly.

![Butterflies Screenshot](screenshot_butterflies.PNG)

Then, the struggles began.

## Problems or Issues this week

### Caterpillar Experiment

I was trying to come up with a caterpillar that would wiggle across the screen. This experiment did not end like I wanted at all. At first I couldn't even get the caterpilar to show up, then I couldn't get it to wiggle like I wanted. It was flowing off diagonally, instead of straight across the screen. I reached a point where it no longer felt creative. I was obsessing over numbers and posistion, and math. How could ten circles ever be a caterpillar. I was so focused on my objects and object interactions I'd lost something important in my coding. The delight of discovery disappeared with my obsession over an object. Why did the code have to do what I wanted, why couldn't it could be something else?

I decided to abandon my caterpillar idea.

I kept the `class Caterpillar`, instead of renaming it ripples or something closer. Instead of bouncing off each other, I have the circles grow to a certain size and then start over. I put this class into a separate file called caterpillar.js, and then linked this inside the index.html file.

```html
    <head>
        <meta name="viewport" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0>
        <script src="p5_lib/p5.min.js"></script>
        <!-- <script src="p5_lib/p5.dom.min.js"></script> -->
        <!-- <script src="p5_lib/p5.sound.min.js"></script> -->
        <script src ="caterpillar.js"></script>
        <script src="sketch.js"></script>
        <style> body {padding: 0; margin: 0;} </style>
    </head>
```
Screenshot of my sketch this week.

![spirals](screenshot_spirals.PNG)

### Caterpillar revised

However, after I completed the homework's basic requirements, I went back to the caterpillars. My obession was not over. I pulled up older code and started again. I was going to make these circles wiggle.

![Caterpillar](screenshot_caterpillar.PNG)

Unfortunately, despite the wiggling motion across the screen, I could not make the caterpillar appear anywhere else on screen. I wanted to see it wiggle into view randomly. When I tried its body fell apart completely.

![Caterpillar](screenshot_scattered_body.PNG)

I have no idea why. This is so insaney frustrating. So I did not submit this failed project. I did not make my caterpillar wiggle off screen and repear as a butterfly.

## Other Classmates Issues/discussions

I helped @MorganLong26 with some troubleshooting. 

## Conclusion
