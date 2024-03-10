// Event Listerner
const buttonTwo = document.querySelector('#but-2');
console.log(buttonTwo);

buttonTwo.addEventListener('click', function(){
  alert('Use button 2');
});

const buttonThree = document.querySelector('#but-3');
buttonThree.addEventListener('mouseover', (e) => {
  buttonThree.style.backgroundColor = 'red';
})

// Reveal Hidden Content
const revealBtn = document.querySelector('#reveal-but');
const hiddentContent = document.querySelector('.hidden-content');

function revealContent() {
  if(hiddentContent.classList.contains('isReveal')) {
    hiddentContent.classList.remove('isReveal');
  }
  else {
    hiddentContent.classList.add('isReveal');
  }
}
revealBtn.addEventListener('click', revealContent);

// Event Propagation
// window.addEventListener("click", (e) => {
//   console.log("window");
// }); // => capture, bubble =
// document.addEventListener("click", (e) => {
//   console.log("Document");
// });
// document.querySelector('.div-3').addEventListener("click", (e) => {
//   console.log("Div3");
// });
// document.querySelector('.div-2').addEventListener("click", (e) => {
//   // e.stopPropagation();
//   console.log("Div2");
// }, {once: true});
// document.querySelector('.div-1').addEventListener("click", (e) => {
//   console.log("Div1");
// });
// document.querySelector('#propagation-btn').addEventListener("click", function(e) {
//   console.log(e.target.innerText = 'clicked');
// });

// Event Delegation

// document.querySelector('#football').addEventListener("click", (e)=> {
//   console.log(e);
//   console.log('Football is clicked');
//   if(e.target.matches('li')) {
//     e.target.style.backgroundColor = 'grey';
//   }
// })
const ul = document.querySelector('.delegation-container');
ul.addEventListener('click', (e) => {
  console.log(e);
  console.log(e.target.getAttribute('id') + " is clicked");

  if(e.target.matches('li')) {
    e.target.style.backgroundColor = 'grey';
  }
}); // => apply to newSport
// ul.childNodes.forEach(function(li){
//   li.addEventListener("click", (f) => {
//     f.target.style.backgroundColor = "blue";
//   })
// }); // => not apply to newSport
const newSport = document.createElement('li');
newSport.innerText = 'volleyball';
newSport.setAttribute('id', 'volleyball');
ul.append(newSport);