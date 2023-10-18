
document.querySelector('#items').parentElement.style.backgroundColor='yellow';
document.querySelector(".list-group-item").nextElementSibling.style.backgroundColor='red';
document.querySelector('#items').previousElementSibling.style.backgroundColor='green';
document.querySelector('#items').firstElementChild.style.color='blue';
document.querySelector('#items').lastElementChild.textContent="hello";

let newItem=document.createElement('div');
let newItemText=document.createTextNode('hello world');
newItem.appendChild(newItemText);
let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');
container.insertBefore(newItem,h1);
let secondItem=document.createElement('div');
secondItem.innerText='hello world';
let list=document.querySelector('#items');
list.insertAdjacentElement('afterbegin',secondItem);





