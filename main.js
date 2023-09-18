let [hours, minutes, seconds] = [0, 0, 0];
const displayTime = document.getElementById("displayTime");
let timer;
function updateDisplay() {
  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");
  displayTime.innerHTML = `${h}:${m}:${s}`;
}
function stopwatch() {
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
function watchStart() {
  if (timer) clearInterval(timer);
  timer = setInterval(stopwatch, 1000);
}
function watchStop() {
  clearInterval(timer);
}
function watchReset() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
}