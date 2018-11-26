Julia Ballas 50

[Game in Progress](https://jballas.github.io/120-work/final-project-proposal/index.html)

# Final Project Proposal

date 11-21-18

## Summary

For my final project I'm going to make a simple game: Lucy and the Ghost of Garnet.

## Inspirations

The basic idea of the game is to get Lucy to the portal before Edith catches her. There isn't any fighting, no attacking. It's a chase game.

The story comes from a Young Adult novel I would like to write someday about Lucy's complicated school life, where she learns to study and fight against shadowy monsters. Anvil Edith is a ghost from Garnet Ghost town who died hundred of years ago when she fell and hit her head on an anvil.

## Workflow

1. Coding (Finish by November 27th)
    - Player movement (using `keyIsDown`)
    - Player interacts with goal
    - Enemy movement toward stationary target
    - Enemy movement toward moving target
    - Enemy interacts with Player
    - Random appearance on screen
    - Obstacles?
2. Sprites/ Concept Art (Finish by November 30th)
    - Lucy and Edith
        - PS pixel art
        - Sprite animation/Sprite sheet
    - Background sketch
        - PS line art
        - PS coloring
    - Main Page
        - brainstorm ideas/draft
        - line art
        - coloring
    - Add final sprites to game
    - Add final background to game
3. Main Page and About page (Finish by December 1st)
    - Draft main page layout
        - A simple p5.JS animation loop?
        - LOGO sketch
    - Write About page
    - Final sketch
    - Link Main Page to About and Game
4. Sound (finish by Decemer 4th)
    - Search Hooksounds.com or Musopen.org offer for free background music
    - Add background music to Game
    - Add music to Main Page
    - Search Freesound.org for creative-commons Sound effects
    - Add sound effects to game

5. Impliment other ideas?

6. Playtesting/Feedback (Send to people around December 5th)
    - From friends and family
    - GitHub forum

7. Submit Final Project **deadline Tuesday December 11th, 8:00AM**

## Details

There are three main elements I have to code.

- Lucy (player)
- Anvil Edith (enemy)
- Portal (goal)

The player will need to be restricted inside the canvas, and controlled with the arrows on the keyboard. If the player interacts with the goal, they win and game should pause.

The enemy targets players and moves toward them. If the enemy intercects with the player then it's Game Over.

I want the player to appear randomly on the left of the screen. The enemy should appear randomly on the right of the screen.

### Player Movement

Here is the code for player movement using the `keyIsDown` argument.

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

Here is a link to my Game so far:



### Deadlines

November 27th: Finish coding Main elements of game(player, enemy, you win, game over)

November 30th: sprite animation and concept art completed, added to final game

December 1st: Main page and About page, Link these pages to game

December 4th: Sound added to game

December 5th: Play testing on forum, with friends and family.

My deadline for coding the main game features is November 27th, which is when I usually submit my homework. Then I want to focus on the artwork, sound and other presentation elements, like having a main page link to the game, and an about. I'll impliment any feedback suggestions on the weekend before the deadline, and impliment any other ideas, such as obstacles, before final submission.  

### Art

I'll need to make a sprite animation for Lucy and Edith. I'll need to create a background. I'm going to do a 16 bit pixel artwork style.

I would also like to have a main page sketch, featuring both Lucy and Edith. I'd like to see a loop animation of Edith chasing Lucy across the screen.

### Sound

I need to find background music, and simple sound effects, such as when Lucy sucessfully reaches the goal, and when Edith catches her.

### Other ideas

Should I make obstacles inside the room to limit the player's ability to get to the goal?  I want to have a static background. What size should my screen be?

Should I have a way to refresh the game, or a reset button? What about making a return to main menu button?

Where do I show people the game controls? On the main menu screen? Can I make a About page that includes the controls?

What about other enemies? I could make other ghosts, such as a ghost that only moves on the X-axis or a ghost that mirrors your movement.

Can I somehow program other difficulty levels for Edith?

Can I add in another element to the game where Edith talks to you and you can respond to her while you're trying to move the character around the screen?

## Research

Dan Shiffman has a video on Steering which uses this formula:
Steering force = Desired velocity - Current velocity.
This is how I will code my enemy movement.

[Shiffman, Dan. "Coding Challenge #59: Steering Behaviors." The Coding Train](https://www.youtube.com/watch?v=4hA7G3gup-4)  
I'm such a beginner at Photoshop, luckily I found a YouTube channel to teach me how to draw pixel art and make a simple animation.

["How to draw pixel art game characters in PS - Tutorial" Blackthronprod.](https://www.youtube.com/watch?v=qzvYu48kw5Q)

["How to animate Pixel art Game Characters in PS - Tutorial](https://www.youtube.com/watch?v=mnJb5iwYAmg)

I haven't done anything with sound in p5.js, so I'll be reviewing Dan Shiffman's p5.js Sound Tutorial. He has videos on sound effects too.

## Conclusion

I grew up playing Nintendo NES games and I expect a certain level of finesse to my games. But as an artist, I'm much more interested in the story and characters behind this game than the actual game play. Simplier is better. That's why I'm only programming one ghost, and not three. Otherwise this game might start to resemble pacman.