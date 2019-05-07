/* Treehouse FSJS Techdegree
 * Cedric P. Clark
 * Project 4 - OOP Game App
 * app.js */


 // Global variables 
const game = new Game();
const phrase = new Phrase();

const startButton = document.getElementById('btn_reset');
const keys = document.querySelectorAll(".key");


const keyBoard = document.querySelector('#qwerty');
const h2 = document.querySelectorAll('h2');
const hearts = document.querySelector('ol');



// hides 'Phrase Hunter' heading
// hides keyboard
// hides heart images

h2[1].style.display = 'none';
keyBoard.style.display = 'none';
hearts.style.display = 'none';

// Listens for user to click start button to start the game. 

startButton.addEventListener('click', () => {

   game.startGame();
  // console.log('clicked');
 });


