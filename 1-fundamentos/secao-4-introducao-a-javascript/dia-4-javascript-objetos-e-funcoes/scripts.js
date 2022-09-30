let player = {
    name : 'Marta',
lastName : 'Silva',
age : 34,
medals : { golden: 2, silver: 3 },
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let key in car) {
    //console.log(key, car[key]);
  }

  function sum(num1, num2) {
    return num1 + num2;
  }

  function minum(num1, num2) {
    return num1 - num2;
  }

  function division(num1, num2) {
    return num1 / num2;
  }

  function multiplication(num1, num2) {
    return num1 * num2;
  }

  function modulo(num1, num2) {
    return num1 % num2;
  }

 //console.log(sum(5,2));

 function verificaPalindrome(word) {
  let wordNew = word.split('');
  let reverse = wordNew.reverse();
  let reverseWord = reverse.join('');
  if (reverseWord === word) {
    return true;
  } 
  return false;
 }


 //console.log(verificaPalindrome('arara'));


 function biggestInteger(arrayInteger) {
   let biggestNumber = Math.max(...arrayInteger);
    let indexInteger = arrayInteger.indexOf(biggestNumber);
    return indexInteger;
 }
 
 
 
 //console.log(biggestInteger([1,2,3]));

 