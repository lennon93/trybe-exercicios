let factorial = 10;

for (let index = 1; index < 10; index +=1) {
    factorial *= index;
}

console.log(factorial);

//=========================================//

let word = 'tryber';
let reverseWord = '';

for (let index = word.length-1; index >= 0; index -= 1) {
  reverseWord += word[index];
}

console.log(reverseWord);

//=========================================//

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array[0];


for (let index = 0; index < array.length; index +=1) {
    if (array[index].length > biggestWord.length) {
        biggestWord = array[index];
    }  if (array[index].length < smallestWord.length) {
        smallestWord = array[index];
}
   
}
console.log(biggestWord);
console.log(smallestWord);

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 7; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);

//=========================================//

let n = 5;
let asterisk = '*';
let line = '';



for (let index = 0; index < n; index +=1) {
    line += asterisk;
}for (let index2 = 0; index2 < n; index2 +=1) {
    console.log(line);
}

let n2 = 5;
let asterisk2 = '*';
let line2 = '';

for (let index = 0; index <= n2; index +=1) {
    console.log(line2);   
    line2 += asterisk2;    
}

let n3 = 5;
let asterisk3 = '*';
let line3 = '';

for (let index = 0; index <= n3; index +=1) {
    console.log(line3);   
    line3 += asterisk3;    
}