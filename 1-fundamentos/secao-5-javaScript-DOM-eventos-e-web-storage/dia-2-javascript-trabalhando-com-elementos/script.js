let firstElement = document.getElementById('elementoOndeVoceEsta');
let paibackgroundColor = document.getElementById('elementoOndeVoceEsta').parentElement;
paibackgroundColor.style.color =  'red';
let firstChildOfChild = document.getElementById('primeiroFilhoDoFilho');
firstChildOfChild.innerText = 'Texto de teste';
let firstChild = document.getElementById('pai').firstElementChild;
let firstChild2 = document.getElementById('elementoOndeVoceEsta').previousElementSibling;
let thirdChild = document.getElementById('elementoOndeVoceEsta').nextElementSibling;
let attention = document.getElementById('elementoOndeVoceEsta').nextSibling;
let thirdChild2 = document.getElementById('pai').lastElementChild.nextElementSibling;

console.log(firstElement);
console.log(paibackgroundColor);
console.log(firstChildOfChild);
console.log(firstChild);
console.log(firstChild2);
console.log(attention);
console.log(thirdChild);
console.log(thirdChild2);