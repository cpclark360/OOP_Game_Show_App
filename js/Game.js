/* Treehouse FSJS Techdegree
 * Cedric P. Clark
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
       
        this.missed = 0;
        this.phrases = [    { phrase:'One Ball Thats All'},
                            { phrase:'Never Give Up Hope'},
                            { phrase:'A Glass Half Full'},
                            { phrase:'Coding is Fun'},
                            { phrase:'Missing Link'   }];

        this.activePhrase = null;
    }

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() {
    let r = Math.floor(Math.random() * game.phrases.length); 
    this.activePhrase = game.phrases[r].phrase.toLowerCase();
    return game.phrases[r];
};


/**  * Begins game by selecting a random phrase and displaying it to user  */ 
startGame() {
        const phrase = new Phrase(game.getRandomPhrase().phrase);

   
        const startButton = document.getElementById('btn_reset');
        h2[1].style.display = 'block';
        keyBoard.style.display = 'block';
        hearts.style.display = 'block';
        startButton.style.display = 'none';
        h2[0].style.display = 'none';
        
    
        game.getRandomPhrase();
        phrase.addPhraseToDisplay();
        game.handleInteraction();
        game.keyPressInteration();
    
        
   

}; 

// handles the user interactions for Virtual Keyboard

handleInteraction(){
         // event listener for keyboard 
    for(let i = 0; i < keys.length; i += 1){
        keys[i].addEventListener('click', (e) => {
        console.log('keyboard clicked');
       // console.log(e.target.innerText);
        
       // Hides the key after the user selects it.
            if (phrase.checkLetter(e.target.innerText) === true ||  phrase.checkLetter(e.target.innerText) === false   ){
                
                keys[i].classList.replace('key','disabled');
                keys[i].disabled = true;


             // console.log(e.target);
            } 
       // displays the correctly guessed keys
        phrase.showMatchedLetter(e.target.innerText);
       // shows how many tries are left
        phrase.removeLife(phrase.checkLetter(e.target.innerText));
        // determines when the game is won or lost
        game.gameOver(game.checkForWin());
        });

        
        

     }
}

// Determines if the user won or lost
checkForWin(){
     
    let hide_letter = document.querySelectorAll('.hide_letter');

    if(game.missed === 5){
      //  console.log('You lose!');
        //alert('You Lost!');
        return 'LOST';
    }


   if ( hide_letter.length === 0 ){
       // console.log('You won!');
       // alert("You Won!");
        return "WON";
   } 
 
}

// Displays a message if the user won or lost and resets the game when the user clicks the button.

gameOver(gameStatus){
    const list = document.querySelector('ul');
    if(gameStatus === 'WON'){
        
        startButton.style.display = '';
        h2[1].style.display = 'none';
        keyBoard.style.display = 'none';
        hearts.style.display = 'none';
        list.style.display = 'none';
        startButton.className = 'Won';
        startButton.innerText = `YOU WON!, 
                        Click here to play again!`;
        
    }

    if(gameStatus === 'LOST'){

        startButton.style.display = '';
        h2[1].style.display = 'none';
        keyBoard.style.display = 'none';
        hearts.style.display = 'none';
        list.style.display = 'none';
        startButton.className = 'Lost';
        startButton.innerText = `Sorry you Lost, 
                            Click here to play again!`;

    } 

    // reset game
    startButton.addEventListener('click', () => {
        location.reload();
    });

}


// Handles interdations for the user's physical keyboard

keyPressInteration() {
   
   document.body.addEventListener('keyup',(e)=>{
    let key;

    if(window.event) { 
        key = e.keyCode;
    } 
    let keyTyped = String.fromCharCode(key).toLowerCase();
    console.log(keyTyped);

    if (phrase.checkLetter(keyTyped) === true ||  phrase.checkLetter(keyTyped) === false   ){
           
        for(let i = 0; i < keys.length; i += 1){
            if(keys[i].innerHTML === keyTyped){    
                keys[i].classList.replace('key','disabled');
                keys[i].disabled = true;

            }
        }
    } 
        // displays the correctly guessed keys
        phrase.showMatchedLetter(keyTyped);
        // shows how many tries are left
        phrase.removeLife(phrase.checkLetter(keyTyped));
        // determines when the game is won or lost
        game.gameOver(game.checkForWin());


    });

}















    }
     

     

    




    


