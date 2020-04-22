/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
   constructor(phrase) {
     this.phrase = phrase;
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

   //checkLetter() {}
   //showMatchedLetter() {}


 }
