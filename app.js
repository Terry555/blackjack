let cardNumber, playersCards, dealersCards, scores;

//Hits one more card for the player
document.querySelector('.button-hit').addEventListener('click', function(){
    drawCard(0);
    cardNumber[0] += 1;
    document.querySelector('.player-score').textContent = scores[0];
    results();
})

//Starts the game back to zero
//Draws two cards for the player and one card for the dealer
document.querySelector('.button-start').addEventListener('click', function(){
  let cardDOM;
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
  cardDOM = document.getElementById('card-1-2');
  cardDOM.src = './assets/cardback.png';
  results();
})

//Dealers cards for the dealer until they reach 17 or bust
document.querySelector('.button-stay').addEventListener('click', function(){
  console.log("Stay button is clicked!")
    while (scores[1] <= 17){
      drawCard(1);
      cardNumber[1] += 1;
      document.querySelector('.dealer-score').textContent = scores[1];
      aceChange(1);
    }
    beatTheDealer();
})

//Draws a random card and pushes it into the card array
//Also changes the card image when drawn
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
  aceChange(0);
}

//Determines if the player has busted yet or not
function results(){
  if (scores[0] > 21) {
    document.querySelector('.result').textContent = "YOU BUST!!";
  } else if (scores[0] === 21) {
    document.querySelector('.result').textContent = "21 YOU WIN!!";
  } else {
    document.querySelector('.result').textContent = "Do you want to hit or stay?";
  }
}

//After staying, determines if the dealer or player wins
function beatTheDealer(){
  console.log("player score = " + scores[0])
  console.log("dealer score = " + scores[1])
  if (scores[0] > scores[1] || scores[1] > 21) {
    document.querySelector('.result').textContent = "YOU BEAT THE DEALER!!";
  } else if (scores[0] < 22 && scores[0] === scores[1]) {
    document.querySelector('.result').textContent = "PUSH";
  } else {
    document.querySelector('.result').textContent = "YOU LOST TO THE DEALER!!";
  }
}

//Checks if there are aces and score is over 21. If so,
//it changes ace score from 11 to 1
function aceChange(player){
  let index = playersCards.indexOf(11);
  if (scores[player] > 21) {
    if (index >= 0) {
      if (player === 0){
      playersCards.splice(index, 1, 1);
      scores[player] -= 10;
      }
    }
  }
}
