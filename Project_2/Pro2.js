let openBtn = document.querySelector('#open-btn');
let closeBtn = document.querySelector('#close-btn');
let container = document.querySelector('.container');

openBtn.addEventListener('click', (e) => {
  let S = container.style.display;
  if(S == 'none') container.style.display = 'flex';
  else container.style.display = 'none';
});
closeBtn.addEventListener('click', (e) => {
  container.style.display = 'none';
})