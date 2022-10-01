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

 function biggestWord (word) {
  let wordTaken = '';
  let amountCharacter = 0;
  for (let index = 0; index < word.length; index += 1){
    if (word[index].length > amountCharacter) {
      amountCharacter = word[index].length;
      wordTaken = word[index];
    }
  }
    return wordTaken;
 }


 //console.log(biggestWord(['queijo', 'ovo', 'agua']));


 function maisRepetido(numeros) {
  let num = {};

  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = prop;
    }
  }

  return contNumero;
}

//console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2

function sumNumero(num){
  let resultNumber = 0;
  for (let index = 1; index <= num; index += 1){
      resultNumber += index;
  }
  return resultNumber;
}

console.log(sumNumero(5));



function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;
  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
      break; // O "break" serve para encerrar o loop.
    } else {
      result = true;
    }
  }
  
  return result;
}

console.log(verificaFimPalavra('trybe', 'be')); //true
console.log(verificaFimPalavra('joaofernando', 'fernan')); //false