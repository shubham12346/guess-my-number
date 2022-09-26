'use strict';

console.log(document.querySelector('.message').textContent);


var Secretnumber =Math.trunc(Math.random()*20)+1;
console.log(Secretnumber);
let score =20;
let highscore =0;
document.querySelector('.check').addEventListener('click',function(){
    const guess =Number ( document.querySelector('.guess').value );
    // when ther is no input 
    if(!guess){
        document.querySelector('.message').textContent='No number';
    
    }
    
    else if(guess=== Secretnumber){
        // when player wins 
        document.querySelector('.message').textContent= 'Correct You won';
        document.querySelector('.number').textContent = Secretnumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if(score>highscore){
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;
        
        
    }



    else if (guess>Secretnumber){

        // when guessed number is high 

        document.querySelector('.message').textContent = 'Too high';
        score--;
    }
    
    else if(guess< Secretnumber){
        // when guessed number is low 

        document.querySelector('.message').textContent = 'Too low';
        score--;
    }


    if(score<0)
    {
        document.querySelector('.message').textContent='You lost the game '
        return;
    }
    document.querySelector('.score').textContent= score;
});



document.querySelector('.again').addEventListener('click',function(){
    score=20;
    document.querySelector('.message').textContent= 'Start guessing ';
    document.querySelector('body').style.backgroundColor ='#222'
     document.querySelector('.number').textContent = '';
    document.querySelector('.guess').textContent='';
     Secretnumber =Math.trunc(Math.random()*20)+1;
    console.log(Secretnumber);


})