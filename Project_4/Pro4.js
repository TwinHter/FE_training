const counter = document.querySelector('#counter');
const start = document.querySelector('#start-counter');
const stopp = document.querySelector('#reset-counter');

let s = 0, m = 0, h = 0;
let timeStatus = 0, timeInterval = null;
let lS = '', lM = '', lH = '';
function TimeChange() {
  s++;
  m += Math.floor(s/60);
  s %= 60;
  h += Math.floor(m/60);
  m %= 60;
  if(s < 10) lS = '0'; else lS = '';
  if(m < 10) lM = '0'; else lM = '';
  if(h < 10) lH = '0'; else lH = '';
  let TIME = lM + h.toString() + ':' + lM + m.toString() + ':' + lS + s.toString();
  counter.innerText = TIME;
}
start.addEventListener('click', (e) => {
  if(timeStatus == 0) {
    start.innerText = '||';
    timeInterval = window.setInterval(TimeChange, 1000);
    timeStatus = 1;
  }
  else {
    start.innerText = '>';
    window.clearInterval(timeInterval);
    timeStatus = 0;
  }
});
stopp.addEventListener('click', (e) => {
  counter.innerText = '00:00:00';
  window.clearInterval(timeInterval);
  if(timeStatus == 1) {
    start.innerText = '>';
    timeStatus = 0;
  }
  s = 0;
  m = 0;
  h = 0;
});