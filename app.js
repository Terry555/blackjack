let scores, cardNumber, playersCards, dealersCards;

document.querySelector('.button-hit').addEventListener('click', function(){
    drawCard(0);
    cardNumber[0] += 1
    document.querySelector('.player-score').textContent = scores[0];
})

document.querySelector('.button-start').addEventListener('click', function(){
  scores = [0,0];
  cardNumber = [1,1];
  playersCards = [];
  dealersCards = [];

  drawCard(0);
  cardNumber[0] += 1;
  drawCard(0);
  cardNumber[0] += 1;
  drawCard(1);
  cardNumber[1] += 1;
  document.querySelector('.player-score').textContent = scores[0];
  document.querySelector('.dealer-score').textContent = scores[1];
  console.log("players cards = " + playersCards)
  console.log("dealers cards = " + dealersCards)
})

function drawCard(player){
  let randomNumber, card, cardDOM;
  randomNumber = Math.floor(Math.random() * 52) + 1
  if (randomNumber <= 4){
    card = 11;
  } else if (randomNumber >=5 && randomNumber <= 8){
    card = 2;
  }  else if (randomNumber >=9 && randomNumber <= 12){
    card = 3;
  } else if (randomNumber >=13 && randomNumber <= 16){
    card = 4;
  } else if (randomNumber >=17 && randomNumber <= 20){
    card = 5;
  } else if (randomNumber >=21 && randomNumber <= 24){
    card = 6;
  } else if (randomNumber >=25 && randomNumber <= 28){
    card = 7;
  } else if (randomNumber >=29 && randomNumber <= 32){
    card = 8;
  } else if (randomNumber >=33 && randomNumber <= 36){
    card = 9;
  } else {
    card = 10;
  }
  if (player === 0) {
    playersCards.push(card)
  } else {
    dealersCards.push(card)
  }
  scores[player] += card;
  cardDOM = document.getElementById('card-' + player + '-' + cardNumber[player]);
  cardDOM.src = './assets/' + randomNumber + '.png';
}
