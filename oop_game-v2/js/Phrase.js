/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }

   /**
   * Display phrase on game board
   */
   addPhraseToDisplay() {
     let splitPhrase = this.phrase.split('');
     const phraseId = document.getElementById('phrase');
     splitPhrase.forEach((letter) => {
       if (letter !== ' ') {
         let characterKey = document.createElement('li');
         characterKey.textContent = letter;
         characterKey.setAttribute('class', `hide letter ${characterKey.textContent}`);
         phraseId.firstElementChild.appendChild(characterKey);
       } else {
         let space = document.createElement('li');
         space.textContent = ` `;
         space.setAttribute('class', `space`);
         phraseId.firstElementChild.appendChild(space);
       }
     });
   }

   /**
   *checks if passed letter is in phrase.
   *@param (string) letter - letter to check.
   */
   checkLetter(letter) {
      //if true returns letter.
      return this.phrase.includes(letter);

   }

   /**
   *displays passed letter on screen after a match is found.
   *@param (string) letter - letter to display.
   */
   showMatchedLetter(letter) {
     let chosenLetter = document.querySelectorAll('.letter');
     chosenLetter.forEach(chosenLetter => {
       if (letter === chosenLetter.textContent) {
         chosenLetter.classList.replace('hide', 'show');
       }
     });

  }

  /**
  *removes the li elements fro the ul elements
  */
  resetPhrase() {
    const phraseId = document.getElementById('phrase');
    phraseId.innerHTML = '<ul></ul>';
  }


 }
