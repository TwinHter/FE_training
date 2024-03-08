//Styling element
// const title = document.querySelector('header');
// title.style.color = 'red';
// const listItems = document.querySelectorAll('.item');
// listItems.forEach(item => {
//   item.style.fontSize = '2rem';
// });
//Create Element
const ul = document.querySelector('.items');
const li = document.createElement('li');
//Adding Elemet
ul.append(li);
//Modifying context

// const firstListItem = document.querySelector('.item');
// console.log(firstListItem.innerText);
// console.log(firstListItem.innerHTML);
// console.log(firstListItem.textContent);
li.innerText = 'abc';

//Modifying Attributes and Classes
li.setAttribute('class', 'item');
li.removeAttribute('class');

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));
li.classList.add('item');
console.log(li.classList.contains('item'));

//Remove Element
li.remove();