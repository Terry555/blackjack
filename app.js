let scores = [0,0];
let cardNumber = 1;


document.querySelector('.button-hit').addEventListener('click', function(){
    drawCard(0);
    drawCard(1);
    // document.querySelector('.player-first-card').textContent = card;
    document.querySelector('.dealer-score').textContent = scores[0];
    document.querySelector('.player-score').textContent = scores[1];
    cardNumber += 1
})

function drawCard(player){
  let randomNumber, card, cardDOM;
  randomNumber = Math.floor(Math.random() * 52) + 1
  if (randomNumber <= 4){
    card = 1;
    scores[player] += card;
  } else if (randomNumber >=5 && randomNumber <= 8){
    card = 2;
    scores[player] += card;
  }  else if (randomNumber >=9 && randomNumber <= 12){
    card = 3;
    scores[player] += card;
  } else if (randomNumber >=13 && randomNumber <= 16){
    card = 4;
    scores[player] += card;
  } else if (randomNumber >=17 && randomNumber <= 20){
    card = 5;
    scores[player] += card;
  } else if (randomNumber >=21 && randomNumber <= 24){
    card = 6;
    scores[player] += card;
  } else if (randomNumber >=25 && randomNumber <= 28){
    card = 7;
    scores[player] += card;
  } else if (randomNumber >=29 && randomNumber <= 32){
    card = 8;
    scores[player] += card;
  } else if (randomNumber >=33 && randomNumber <= 36){
    card = 9;
    scores[player] += card;
  } else {
    card = 10;
    scores[player] += card;
  }
  cardDOM = document.getElementById('card-1-' + cardNumber);
  cardDOM.src = './assets/' + randomNumber + '.png';
}
