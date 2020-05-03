/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
*/

let game;
document.getElementById("btn__reset").addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

let keys;
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', (e) => {
      game.handleInteractions(e.target)
    });
});
