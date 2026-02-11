let totalTime = 25 * 60;
let remainingTime = totalTime;
let timerInterval = null;

const timerDisplay = document.getElementById("timer");

function updateDisplay() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  timerDisplay.textContent =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Focus Session Complete!");
      return;
    }

    remainingTime--;
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  remainingTime = totalTime;
  updateDisplay();
}

updateDisplay();
