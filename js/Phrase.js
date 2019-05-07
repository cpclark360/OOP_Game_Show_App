/* Treehouse FSJS Techdegree
 * Cedric P. Clark
 * Project 4 - OOP Game App
 * Phrase.js */







class Phrase {
     constructor(phrase){
        this.phrase = phrase;
       
     }


 // Display phrase on game board and returns the random Phrase

     addPhraseToDisplay() {
          const phraseList = document.querySelector('#phrase ul');
          const randomPhrase = game.getRandomPhrase().phrase.toLowerCase();

          for(let i = 0; i < randomPhrase.length; i += 1 ){
               if(randomPhrase.charAt(i) !== ' ' ){
                    phraseList.innerHTML += `<li class="hide_letter">${randomPhrase.charAt(i)}</li>`;
                         //${randomPhrase.charAt(i)}
               }else {
                    phraseList.innerHTML += `<li class="space">${randomPhrase.charAt(i)}</li>`;
               }
               
          }
          return randomPhrase;
     }

// checks if the key enter is matched in the phrase and returns true or false

      checkLetter(key) {
         
          let phrase = game.activePhrase.split('');
          let checked = phrase.includes(key);
        //  console.log(checked);
          return checked;
          
 }
 
// shows the  matched key in the phrase by swapping the 'hide_letter' class with 'show_letter' class 

      showMatchedLetter(key){
          const phraseList = document.querySelector('#phrase ul');
          let activePhraseLetter = phraseList.children;          

          
               for(let i = 0; i < game.activePhrase.length; i += 1){
                    if( game.activePhrase[i] === key){
                        activePhraseLetter[i].classList.replace('hide_letter','show_letter');
                    }
               }
 }


// Shows how many tries are left when the user gets a guess incorrect

      removeLife(boo) {
          let tries = document.getElementsByTagName('img');
          let count = game.missed; 
        
         if (boo === false && count === 0 ){
               tries[4].src='images/lostHeart.png';
               game.missed += 1;
              
              console.log(count);

          } else if (boo === false && count=== 1){
               tries[3].src='images/lostHeart.png';
               game.missed += 1;

          }  else if (boo === false && count=== 2){
               tries[2].src='images/lostHeart.png';
               game.missed += 1;

          }  else if (boo === false && count=== 3){
               tries[1].src='images/lostHeart.png';
               game.missed += 1;

          }  else if (boo === false && count=== 4){
               tries[0].src='images/lostHeart.png';
               game.missed += 1;
          }

     }

}

