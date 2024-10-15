const score = JSON.parse(localStorage.getItem('score')) || { win: 0, loss: 0, tie: 0 };
const gamemove = ['rock','paper','scissor'];

let isAutoPlaying = false;
let intervalId;

let res = '';
let m = '';
let cm = '';

function playGame(move){
    let result = '';
    if(move == 'reset'){
      score.win = 0,score.loss = 0,score.tie = 0;
    }
    let cmove = computer();
    if(move == 'paper'){
      if(cmove == 'rock')result = 'win';
      else if(cmove == 'scissor')result = 'loose';
      else result = 'again';
    }
    else if(move == 'rock'){
      if(cmove == 'paper')result = 'loose';
      else if(cmove == 'scissor')result = 'win';
      else result = 'again';
    }
    else if(move == 'scissor'){
      if(cmove == 'paper')result = 'win';
      else if(cmove == 'rock')result = 'loose';
      else result = 'again';
    }
    if(result == 'win')score.win++;
    else if(result == 'loose')score.loss++;
    else if(result == 'again')score.tie++;
    
    res = result;m = move;cm = cmove;
    updateScoreElement();
    localStorage.setItem('score',JSON.stringify(score));
}
function computer(){
  const ri = Math.floor(Math.random()*gamemove.length);
  const cmove = gamemove[ri];
  return cmove;
}

/*

<p class="js-result result"></p>
<p class="js-moves"></p>
<p class="js-score score"></p>

*/

function updateScoreElement() {
  // Assuming 'm' is the player's move and 'cm' is the computer's move
  document.querySelector('.js-result').innerHTML = (m === 'reset' ? `` : `your move: <img src="/images/${m}-emoji.png" alt="error" width="50" height="60">`);
  
  document.querySelector('.js-moves').innerHTML = (m === 'reset' ? `` : `computer move: <img src="/images/${cm}-emoji.png" alt="error" width="50" height="60">`);
  
  document.querySelector('.js-score').innerHTML = `win: ${score.win} loss: ${score.loss} tie: ${score.tie}`;
}


function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = computer();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}