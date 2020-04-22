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



 }
