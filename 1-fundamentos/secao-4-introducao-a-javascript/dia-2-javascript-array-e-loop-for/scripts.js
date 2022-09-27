let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//=========================================//

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

menu.push('Contato');

console.log(menu);

//=========================================//

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for ( let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

//=========================================//


let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log(name);
  }

//=========================================//


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index +=1) {
  console.log(numbers[index])
}

let sum = 0;

for (let index = 0; index < numbers.length; index +=1) {
  sum = sum + numbers[index] 
}  
console.log(sum);

let media = sum / numbers.length;

console.log(media);

if (media > 20){
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

let biggestNumber = 0;

for (let index = 0; index < numbers.length; index +=1) {
  if (numbers[index] > biggestNumber) {
    biggestNumber = numbers[index];
  }
  
}

console.log(biggestNumber);

let oddNumber = 0;

for (let index = 0; index < numbers.length; index +=1) {
  if (numbers[index] % 2 !== 0) {
    oddNumber += 1;
  }
  
}

console.log(oddNumber);

//=========================================//

let newNumbers = [];

for (let index = 1; index <= 25; index +=1) {
    newNumbers.push(index);
  
}

console.log(newNumbers);

for (let index = 0; index < newNumbers.length; index +=1) {
  let division = newNumbers[index] / 2;
  console.log(division);
  
}

