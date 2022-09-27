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