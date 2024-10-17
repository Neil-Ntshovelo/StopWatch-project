// Step 1: Select HTML elements
const timerDisplay = document.getElementById('timer');
const startStopBtn = document.getElementById('startstopBtn');
const resetBtn = document.getElementById('resetBtn');

// Step 2: Set up variables
let isRunning = false;
let intervalId;
let time = 0;

// Step 3: Define functions
function startStop() {
  if (!isRunning) {
    isRunning = true;
    startStopBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    intervalId = setInterval(() => {
      time++;
      const minutes = Math.floor(time / 6000);
      const seconds = Math.floor((time % 6000) / 1000);
      const milliseconds = time % 1000;
      timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    }, 10);
  } else {
    isRunning = false;
    startStopBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(intervalId);
  }
}

function reset() {
  isRunning = false;
  startStopBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  clearInterval(intervalId);
  time = 0;
  timerDisplay.textContent = '00:00.000';
}

// Step 4: Add event listeners
startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);