let score = 0;
let timeLeft = 30;
let gameInterval;
let timerInterval;

const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start-btn');

function randomColor() {
  const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF8FAB', '#FFB84C'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.left = Math.random() * 90 + '%';
  balloon.style.backgroundColor = randomColor();
  
  // Pop effect
  balloon.addEventListener('click', () => {
    score += 10;
    scoreDisplay.textContent = score;
    balloon.remove();
  });

  gameArea.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 5000);
}

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  gameArea.innerHTML = '';
  startBtn.disabled = true;

  gameInterval = setInterval(createBalloon, 800);
  timerInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  startBtn.disabled = false;
  alert(`🎉 Time's up! Your final score is ${score}!`);
}

startBtn.addEventListener('click', startGame);
