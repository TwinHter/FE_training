const quest = document.querySelector('#question');
console.log(quest);
for(var i=0; i<quest.childElementCount; i++) {
  const curBox = quest.children[i];
  const fChild = curBox.firstElementChild;
  fChild.lastElementChild.addEventListener('click', (e) => {
    curBox.classList.toggle('active');
  });
}