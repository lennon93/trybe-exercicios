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
