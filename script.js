let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");


function updateDisplay() {
  display.textContent =
    formatTime(hours) + ":" +
    formatTime(minutes) + ":" +
    formatTime(seconds);
}

function formatTime(unit) {
  return String(unit).padStart(2, "0");
}

function startTimer() {
  if (interval !== null) return;

  interval = setInterval(tick, 1000);
}

function tick() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  updateDisplay();
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
