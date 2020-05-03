/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
   constructor() {
     this.missed = 0;
     this.phrases = this.createPhrase();
     this.activePhrase = 'null';
   }

   /**
   * Begins game by selecting a random phrase and displaying it to user
   */
   startGame() {
     document.getElementById("overlay").style.display = "none";
     this.activePhrase = this.getRandomPhrase();
     this.activePhrase.addPhraseToDisplay();

   };

   /**
   *Creates phrases for use in Game.
   *@return {array} An array of phrases that could be used in the game.
   */
   createPhrase() {
     return [
       new Phrase('Bite the bullet'),
       new Phrase('Better late than never'),
       new Phrase('A dime a dozen'),
       new Phrase('Its not rocket science'),
       new Phrase('Easy does it')
     ]
   };

   /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
   getRandomPhrase() {
     return this.phrases[Math.floor(Math.random()*this.phrases.length)];
   };

   /**
   *handles on screen keyboard button clicks.
   *@param {HTMLButtonElement} button - the clicked button element.
   */
   handleInteractions(button) {
     button.disabled = true;
     if (this.activePhrase.checkLetter(button.textContent)) {
       button.className = 'chosen';
       this.activePhrase.showMatchedLetter(button.textContent);
       this.checkForWin();
       if (this.checkForWin()) {
         this.gameOver(true);
       }
     } else {
       button.className = 'wrong';
       this.removeLife();
     }
   };

   /**
   *checks for winning move
   *@return {boolean} True if game has been won, false if game wasnt won.
   */
   checkForWin() {
     let phraseletter = document.querySelectorAll('.hide');
     if (phraseletter.length === 0) {
       return true;
     } else {
       return false;
     }
   };

   /**
   *increases the value of the missed property.
   *removes a life from the scoreboard.
   *checks if player has remaining lives and ends game if player is out.
   */
   removeLife() {
     this.missed += 1;
     if (this.missed === 5) {
       this.gameOver(false);
     }else {
       const missedTry = document.querySelector("img[src='images/liveHeart.png']");
       missedTry.src = "images/lostHeart.png";
     }
   };

   /**
   *displays game over messege
   *@param {boolean} gameWon - whether or not the user won the game.
   */
   gameOver(gameWon) {
     const gameOverlay = document.getElementById('overlay');
     const gameOverMessage = document.getElementById('game-over-message');
     if (gameWon) {
       gameOverlay.classList = "win";
       gameOverMessage.textContent = "Congratulations you won.";
     }else {
       gameOverlay.classList = "lose";
       gameOverMessage.textContent = "Better luck next time. Try again.";
     }
     gameOverlay.style.display = "flex";
     this.resetGame();
   };

   /**
   *resets game
   */
   resetGame() {
     const keyButton = document.querySelectorAll('.keyrow button');
     keyButton.forEach((button) => {
       button.className = 'key';
       button.disabled = false;
     });

     const hearts = document.querySelectorAll('img');
     hearts.forEach((heart) => {
       heart.src = 'images/liveHeart.png';
     });

     this.missed = 0;
     this.activePhrase.resetPhrase();
   }



 }
