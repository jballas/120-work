Julia Ballas 50

[Game in Progress](https://jballas.github.io/120-work/final-project-proposal/index.html)

# Final Project Proposal

date 11-21-18

## Summary

For my final project I will make a simple game called: Fairy Doctor Runs Away.

![Fairy Doctor Game Logo](FD-RunsAway-logo-01.png)

## Inspirations

The basic idea of the game is to get Lillia to the portal before the fairies catch her. There isn't any fighting, no attacking. It's a chase game based on an idea from my self-published novels, which I publish under a pseudonym Ava Clary. I'm working on the 2nd book in the trilogy and I could use this as a promotion for the books.

The Fairy Doctor trilogy follows a young woman named Lillia. She wants to run away from her problems. She used to be a Fairy Doctor, but she quit. However, the fairies still adore her, and they really want her to be a fairy doctor again. If they catch Lillia, it's game over.

## Workflow

1. Coding (Finish by November 27th)
    - Player movement (using `keyIsDown`)
    - Player interacts with goal
    - Enemy movement toward stationary target
    - Enemy movement toward moving target
    - Enemy interacts with Player
    - Random appearance on screen
    - Obstacles?
    - A way to `Splice` the array, so there are fewer enemies?
2. Sprites/ Concept Art (Finish by November 30th)
    - Lillia and the fairies
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

- Lillia (player)
- Fairies (enemy)
- Portal (goal)

The player will need to be restricted inside the canvas and controlled with the arrows on the keyboard. If the player interacts with the goal, they win and game should pause.

The enemy targets players and moves toward them. If the enemy intersects with the player then it's Game Over.

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

Here is a link to my Game so far: [Game in Progress](https://jballas.github.io/120-work/final-project-proposal/index.html)

### Deadlines

November 27th: Finish coding Main elements of game(player, enemy, you win, game over)

November 30th: sprite animation and concept art completed, added to final game

December 1st: Main page and About page, Link these pages to game

December 4th: Sound added to game

December 5th: Play testing on forum, with friends and family.

My deadline for coding the main game features is November 27th, which is when I usually submit my homework. I'll continue to work on implementing my other ideas, such as obstacles, or second part of the game. However, I also need to focus on the artwork, sound and other presentation elements, like having a main page link to the game, and create an about page with the controls. I'll like to implement any feedback suggestions on the weekend before the deadline for final submission.  

### Art

I'll need to make a sprite animation for Lillia and the fairies. I'll need to create a background. I'm going to do a 16 bit pixel artwork style.

I would also like to have a main page sketch, featuring both Lillia and the fairies. I'd like to see a loop animation of fairies chasing Lillia across the screen.

### Sound

I need to find background music, and simple sound effects, such as when Lillia successfully reaches the goal, and when the fairies catches her.

### Other ideas, Questions and Concerns

Should I make obstacles inside the room to limit the player's ability to get to the goal?

I want to have a static background. What size should my screen be?

Should I have a way to refresh the game, or a reset button? What about making a return to main menu button?

Where do I show people the game controls? Should I put them on the main menu screen? Can I make a About page that includes the controls?

**A Second Game within the game**

If there is only one fairy on screen, the game is too easy. If there are ten fairies the game, is too hard. Right now I have five of them and that balances out nicely, if possible, if I have time, I'd like to code in more of a challenge for people. Perhaps I can make difficulty levels?

Or what if I made a way to change how many fairies show up? It could start with ten fairies, and then when you fail to reach the goal you can retry the game as is, or you could have a second option where you try to reason with the fairies.

Then I'd make a conversation game, where you can talk to the fairies and 'cure' their illnesses, or convince they to leave one by one. You'd do this with props and a conversation tree. Where you have to pick the right answer to convince the fairies to leave you alone. If you do convince one to leave, it would 'splice' it from the array and you could continue the game with one less fairy. You could even get rid of all ten of them if you wanted. That would mean ten different conversations? Yikes, that would be a challenge.

I'll consider how to make this work. If I can figure out the basic coding for a text based game.

## Research

Dan Shiffman has a video on Steering which uses this formula:
Steering force = Desired velocity - Current velocity.
This is how I will code my enemy movement. I'll be reviewing two of this projects:

[Shiffman, Dan. "Coding Challenge #59: Steering Behaviors." The Coding Train](https://www.youtube.com/watch?v=4hA7G3gup-4)

and

[Shiffman, Dan. "Coding Challenge 61.1: Evolutionary Steering behaviors - Part 1." The Coding Train. April 2017. www.youtube.com/watch?v=flxOkx0yLrY ](https://www.youtube.com/watch?v=flxOkx0yLrY)

I'm such a beginner at Photoshop, luckily I found a YouTube channel to teach me how to draw pixel art and make a simple animation.

["How to draw pixel art game characters in PS - Tutorial" Blackthronprod.](https://www.youtube.com/watch?v=qzvYu48kw5Q)

["How to animate Pixel art Game Characters in PS - Tutorial](https://www.youtube.com/watch?v=mnJb5iwYAmg)

I'll use Dr. Musick's guidelines for putting a sprite animation into my game.

I haven't done anything with sound in p5.js, so I'll be reviewing Dan Shiffman's p5.js Sound Tutorial. He has videos on sound effects too.

## Conclusion

I grew up playing Nintendo NES games and I expect a certain level of finesse to my games. But as an artist, I'm much more interested in the story and characters behind this game than the actual game play. At this point I'm basically done with the game, a very simple game, and I need to make it into a polished product. If I can add more game play then I will, but getting the sprites into the game and the background and music will be a different kind of challenge.