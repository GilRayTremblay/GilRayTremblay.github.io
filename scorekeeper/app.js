let playerOne = 0;
let playerTwo = 0;

const p1Inc = document.querySelector('#incPlayerOne');
const p2Inc = document.querySelector('#incPlayerTwo');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const reset = document.querySelector('#reset');
let maxScore = document.querySelector('#maxScore').value;

function resetScore() {
    playerOne = 0;
    playerTwo = 0;
    p1Score.innerText = '0';
    p2Score.innerText = '0';
    p1Inc.removeAttribute('disabled', '');
    p2Inc.removeAttribute('disabled', '');
    p1Score.classList.remove('text-success');
    p1Score.classList.remove('text-danger');
    p2Score.classList.remove('text-success');
    p2Score.classList.remove('text-danger');
    maxScore = document.querySelector('#maxScore').value;
}

function winner(winningPlayer) {
    p1Inc.setAttribute('disabled', '');
    p2Inc.setAttribute('disabled', '');
    if (winningPlayer == 1) {
        p1Score.className += 'text-success';
        p2Score.className += 'text-danger';
    }
    else {
        p2Score.className += 'text-success';
        p1Score.className += 'text-danger';
    }
}

p1Inc.addEventListener('click', () => {
    playerOne += 1;
    p1Score.innerText = playerOne;
    if (playerOne >= maxScore) {
        winner(1);
    }
    maxScore = document.querySelector('#maxScore').value;
})
p2Inc.addEventListener('click', () => {
    playerTwo += 1;
    p2Score.innerText = playerTwo;
    if (playerTwo >= maxScore) {
        winner(2);
    }
    maxScore = document.querySelector('#maxScore').value;
})
reset.addEventListener('click', () => {
    resetScore();
    maxScore = document.querySelector('#maxScore').value;
})

