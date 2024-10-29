let hrs = 0;
let min = 0;
let sec = 0;
let ms = 0;
let timer = false;

function start() {
  timer = true;
  stopwatch();
}
function stop() {
  timer = false;
}
function reset() {
  location.reload();
}
function stopwatch() {
  if (timer) {
    ms++;
    if (ms == 100) {
      sec++;
      ms = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hrs++;
      min = 0;
      sec = 0;
    }
    document.querySelector("#hrs").innerText = `0${hrs}`;
    document.querySelector("#min").innerText = `0${min}`;
    document.querySelector("#sec").innerText = `0${sec}`;
    document.querySelector("#ms").innerText = `${ms}`;

    setTimeout("stopwatch()", 10);
  }
}
