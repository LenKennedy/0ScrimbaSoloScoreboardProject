const homeScoreEl = document.getElementById('home-score-el')
const guestScoreEl = document.getElementById('guest-score-el')
let homeScore = 0
let guestScore = 0
let leader = 0

/* Write a function called whosLeading()
When one team's score is greater than the other team's score
change the background of their score to gold */

function whosLeading(){
    el = document.getElementById('home-score-el');
    el2 = document.getElementById('guest-score-el');
  if(homeScore > guestScore){

    el.style.color = 'gold';
    el2.style.color = '#f5cf9e';

  } else if (homeScore < guestScore) {

    el2.style.color = 'gold';
    el.style.color = '#f5cf9e'

  }  else if (homeScore == guestScore) {

    el.style.color = '#f5cf9e';
    el2.style.color = '#f5cf9e';

  }
}

function updateScore() {
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    whosLeading()
}

function homeIncrease(value) {
    homeScore += value
    updateScore()
}

function guestIncrease(value) {
    guestScore += value
    updateScore()
}

function newGame() {
    homeScore = 0
    guestScore = 0
    updateScore()
    el.style.color = '#f5cf9e';
    el2.style.color = '#f5cf9e';
}


