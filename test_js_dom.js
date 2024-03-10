// Traverse the DOM

// Parent Node Traverse
let ul = document.querySelector('.items');
ul.style.fontSize = '2rem';
// console.log(ul);
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html);
// console.log(html.parentElement); // tra ve null vi document khong phai la 1 element (not <></>)
// console.log(html.parentNode); // tra ve document vi theo so do cua cay DOM => nen dung

// Child Node Traverse

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// ul.childNodes[1].style.backgroundColor = 'yellow';
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling Node Traverse
const div = document.querySelector('.container');
console.log(div.childNodes);
console.log(ul.previousSibling);
console.log(ul.previousElementSibling)
console.log(ul.nextSibling);