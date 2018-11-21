Julia Ballas 50

# Final Project Proposal

date 11-21-18

## Summary

For my final project I'm going to make a simple game: Lucy and the Ghost of Garnet.

## Inspirations

The basic idea of the game is to get Lucy to the portal before Edith catches her. There isn't any fighting. No attacking. It's a chase game.

The story comes from a YA novel I would like to write someday about Lucy's complicated school life, where she learns to study and fight against shadowy monsters. Anvil Edith is a ghost from Garnet Ghost town who died hundred of years ago when she fell and hit her head on an anvil. She is has fallen in love with Lucy's Dad.

## Workflow

1. Coding
    - Player movement (using keyIsDown)
    - Player interacts with goal
    - Enemy movement toward stationary target
    - Enemy movement toward moving target
    - Enemy interacts with Player
    - Random appear on screen
2. Sprites
    - Lucy and Edith sketch draft
        - PS pixel art
        - Sprite animation/Sprite sheet
    - Background sketch
        - PS line art
        - PS coloring
    - Add final sprites to game
    - Add final background to game
3. Sound
    - Search Hooksounds or Musopen.org offer for free background music
    - Add background music
    - Search Freesound.org for creative-commons Sound effects
    - Add sound effects to game
4. Main Page and About page
    - brainstorm/Draft layout of main page
    - Write About page
    - Final sketch
    - Link Main Page to About and Game 

5. Impliment other ideas?

6. Playtesting/Feedback
    - From Friends and Family
    - ask for feedback on GitHub forum

7. Submit Final Project: deadline Tuesday December 11th, 8:00AM

## Details

There are three main elements I have to code.

- Lucy (player)
- Anvil Edith (enemy)
- Portal (goal)

The player will need to be restricted inside the canvas, and controlled with the arrows on the keyboard. If the player interacts with the goal, they win.

The enemy targets players and moves toward them. If the enemy intercects with the plyaer then its Game Over.

I want the player to appear randomly on the lower bottom of the screen. The Enemy to appear randomly on the upper part of the screen. Should the location of the goal should be random too?

### Player Movement

Here is the code for player movement using the `keyIsDown` argument. [Test sketch for Player Movement]()

```JS
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
```

### Art

I'll need to make a sprite animation for Lucy, and Edith. I'll need to create a background.

I would also like to have a main page sketch, featuring both Lucy and Edith.

### Sound

I need to find background music, and simple sound effects, such when Lucy sucessful reaches the goal, and when Edith catches her.

### Other ideas

Should I make obstacles inside the room to limit the player's ability to get to the goal?  I want to have a static background. What size should my game screen be?

Should I have a way to refresh the game, or a reset button? What about a return to main menu, or a pause menu?

Where do I show people the game controls? On the main menu screen? Can I make a About page that includes the contols?

Other enemies: such as a ghost that only moves on the X-axis or a ghost that mirrors your movement.

Can I somehow program other difficulty levels for Edith?

Can I add in another element to the game where Edith talks to you and you can respond to her while you're trying to move the character around the screen?

## Research

Dan Shiffman has a video on Steering, where uses this formula:
Steering force = Desired velocity - Current velocity.
This is how I will code my enemy movement.

[Shiffman, Dan. "Coding Challenge #59: Steering Behaviors." The Coding Train](https://www.youtube.com/watch?v=4hA7G3gup-4)  
I'm such a beginner at photoshop, luckily I found a youTube channel to teach me how to draw pixel art and make a simple animation.

["How to draw pixel art game characters in PS - Tutorial" Blackthronprod.](https://www.youtube.com/watch?v=qzvYu48kw5Q)

["How to animate Pixel art Game Characters in PS - Tutorial](https://www.youtube.com/watch?v=mnJb5iwYAmg)

I haven't done anything with sound in p5.js, so I'll be reviewing Dan Shiffman's p5.js Sound Tutorial. He has videos on sound effects.

## Conclusion

I grew up playing Nintendo NES games and I expect my games to a certain level of finess to my games. But as an artist, I'm much more interested in the story and characters behind this game than the actual game play.