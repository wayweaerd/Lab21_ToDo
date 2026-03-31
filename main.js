const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const statusSpan = document.getElementById("status");

let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval = null;
let isRunning = false;
function formatTime(value) {
  return value < 10 ? "0" + value : value;
}
function updateDisplay() {
  hoursSpan.textContent = formatTime(hours);
  minutesSpan.textContent = formatTime(minutes);
  secondsSpan.textContent = formatTime(seconds);
}
function incrementTime() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  updateDisplay();
}

function startTimer() {
  if (!isRunning) {
    timerInterval = setInterval(incrementTime, 1000);
    isRunning = true;
    statusSpan.textContent = "Статус: Работает";
    statusSpan.style.color = "#4caf50";
  }
}

function stopTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
    statusSpan.textContent = "Статус: Остановлен";
    statusSpan.style.color = "#666";
  }
}

function resetTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
  hours = 0;
  minutes = 0;
  seconds = 0;

  updateDisplay();

  statusSpan.textContent = "Статус: Сброшен";
  statusSpan.style.color = "#ff9800";
  setTimeout(() => {
    if (!isRunning) {
      statusSpan.textContent = "Статус: Остановлен";
      statusSpan.style.color = "#666";
    }
  }, 1000);
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

document.addEventListener("DOMContentLoaded", function () {
  updateDisplay();
  statusSpan.textContent = "Статус: Остановлен";
  statusSpan.style.color = "#666";
});
