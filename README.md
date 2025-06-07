# Lotto Game

This is a simple web-based Lotto game where users can select their numbers and try their luck against a randomly generated lottery draw.

## Project Structure

- `pages/`
  - `index.html` – Home page with a start button.
  - `game.html` – Main game interface.
- `js/`
  - `script.js` – Handles navigation from the home page to the game.
  - `game.js` – Contains all the game logic.
- `css/`
  - `style.css` – Styles for the home page.
  - `game.css` – Styles for the game page.
- `images/` – Contains images used in the project.
- `Web.config` – Configuration file for deployment.

## How to Play

1. **Start the Game:**  
   Open `index.html` and click the **START** button to go to the game page.

2. **Select Numbers:**  
   On the game page, enter six unique numbers between 1 and 37, and one "strong number" between 1 and 7.

3. **Check Results:**  
   Click the **CHECK** button. The game will compare your numbers to a randomly generated lottery draw.

4. **Winning and Prizes:**  
   - If you match all 6 numbers and the strong number, you win the top prize.
   - Partial matches may also win smaller prizes.
   - Your current amount is displayed at the top. Each play costs 300₪.

5. **Try Again or End:**  
   After each round, you can try again (if you have enough balance) or end the game.

## Game Logic

- The game starts with an initial amount of 1000₪.
- Each play deducts 300₪ from your balance.
- Prizes are awarded based on how many numbers (and the strong number) you match.
- The game ends when you choose to end or if your balance is too low to continue.

## Technologies Used

- HTML, CSS, JavaScript

## Running the Project

Simply open `pages/index.html` in your browser to start playing.

---

Enjoy and good luck!