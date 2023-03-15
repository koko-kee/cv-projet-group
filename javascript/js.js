const starte = document.querySelector("#start");
const reset = document.querySelector('#reset');
const stope = document.querySelector("#stop");
const chrono = document.querySelector("#chrono");
const sp = document.querySelectorAll("span");
let second = 0;
let minute = 0;
let heure = 0;
let t = 0;

function upload() {
  second += 1;
  if (second == 60) {
    second = 0;
    minute += 2;
  }

  if (minute == 60) {
    minute = 0;
    heure += 1;
  }
  sp[0].innerHTML = heure + 'h';
  sp[1].innerHTML = minute + 'mn';
  sp[2].innerHTML = second + 's';
}

function start() {
  t = setInterval(upload, 100);
}
function stop() {
  clearInterval(t);
}
starte.addEventListener("click", start);
stope.addEventListener("click", stop);
reset.addEventListener("click",() =>{
     clearInterval(t);
     minute = 0; second = 0; heure = 0;
     sp[0].innerHTML = heure+ '0';
     sp[1].innerHTML = minute + '0';
     sp[2].innerHTML = second + '0';
});