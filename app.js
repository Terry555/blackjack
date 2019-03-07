let scores = [0,0];


document.querySelector('.button-hit').addEventListener('click', function(){
    let randomNumber, card;
    randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber <= 10){
      card = randomNumber;
      scores[0] += card;
    } else {
      card = 10;
      scores[0] += card;
    }
    document.querySelector('.player-first-card').textContent = card;
    document.querySelector('.player-score').textContent = scores[0];
})

// 1 = ace
// 2 = 2
// 3 = 3
// 4 = 4
// 5 = 5
// 6 = 6
// 7 = 7
// 8 = 8
// 9 = 9
// 10 = 10
// 11 = jack
// 12 = queen
// 13 = king
