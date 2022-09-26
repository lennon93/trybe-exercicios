const myName = 'Lennon';
const birthCity = 'São Vicente';
let birthYear = 1993;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

//===================================================//

const base = 5;
const height = 8;
const area = base * height;
 
console.log(area);

const perimeter = 2 * base + 2 * height;

console.log(perimeter);

//===================================================//

let nota = 79;

if(nota >= 80) {
    console.log("Parabéns, você foi aprovado com a nota de: " + nota + '!')
} else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera!')
} else {
    console.log('Você foi reprovado!')
}

//===================================================//

let currenthour = 23;
let message;

if (currenthour >= 22) {
    message = 'Não deveriamos comer nada, é hora de dormir!';
} else if (currenthour >= 18 && currenthour < 22) {
    message = 'Rango da noite, vamos jantar :D';
} else if (currenthour >= 14 && currenthour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currenthour >= 11 && currenthour < 14) {
    message = 'Hora do almoço';
} else if (currenthour >= 4 && currenthour < 11) {
    message = 'Hmmm, cheiro de café recém-passado!';
}

console.log(message)

//===================================================//


let weekDay = 'quarta-feira';

if (weekDay === 'segunda-feira' || 'terça-feira' || 'quarta-feira' || 'quinta-feira' || 'sexta-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe!')
} else {
    console.log('FINALMENTE, descanso merecido!')
}

//===================================================//

let approve = 'aprovada';

switch (approve) {
    case 'aprovada':
       console.log('Parabéns, você foi aprovada(o)!'); 
        break;
    case 'lista':
        console.log('Você está na lista de espera.'); 
         break;
    case 'reprovada':
         console.log('Você foi reprovada(o)') ;
          break;
    default:
        console.log('Informação incorreta!') ;               
    }

//===================================================//

let a = 15;
let b = 7;

let adiction = a + b;
let subtraction = a - b;
let division = a / b;
let multiplication = a * b;
let modulo = a % b;

console.log(adiction);
console.log(subtraction);
console.log(division);
console.log(multiplication);
console.log(modulo);

//===================================================//

let number1 = 10;
let number2 = 1000;

if(number1 > number2) {
    console.log("O número 1 é maior que o número 2!")
} else if(number2 > number1) {
    console.log("O número 2 é maior que o número 1!")
} else {
    console.log('Os números são iguais!')
}

//===================================================//


let number3 = 10;
let number4 = 100;
let number5 = 1000;


if(number3 > number4 && number3 > number5) {
    console.log("O número 3 é o maior número!")
} else if(number4 > number5 && number4 > number3) {
    console.log("O número 4 é o maior número!")
} else if(number5 > number3 && number5 > number4) {
    console.log("O número 5 é o maior número!")
} else {
    console.log('Os números empatam como o maior!')
}

//===================================================//

let number6 = 1000;

if(number6 > 0) {
    console.log("O número 6 é positivo!")
} else if(number6 < 0) {
    console.log("O número 6 é negativo!")
} else {
    console.log('O número é igual a zero')
}

//===================================================//

let angle1 = 0;
let angle2 = 90;
let angle3 = 80;


if(angle1 > 0 && angle2 > 0 && angle3 > 0 && angle1 + angle2 + angle3 === 180) {
    console.log("Esses ângulos formam um triângulo retangulo!")
} else if(angle1 > 0 && angle2 > 0 && angle3 > 0 && angle1 + angle2 + angle3 !== 180) {
    console.log("Esses ângulos não formam um triângulo retangulo!")
}  else {
    console.log('Ângulo inválido!')
}

//===================================================//

let piece = 'King';
let result = piece.toLowerCase();

switch (result) {
    case 'bishop':
       console.log('Diagonais!'); 
        break;
    case 'rook':
        console.log('Horizontais e verticais'); 
         break;
    case 'pawn':
         console.log('uma casa a frente e come em diagonal') ;
          break;
    case 'horse':
    console.log('formando um "L"'); 
        break;
    case 'queen':
        console.log('Horizontal, vertical e diagonal'); 
        break;
    case 'king':
        console.log('uma casa na horizontal, vertical e diagonal') ;
        break;
    default:
        console.log('Informação incorreta!') ;               
    }

//===================================================//

let note = 95;

if (note <= 100 && note >= 90){
    console.log('Sua nota é A!')
} else if (note < 90 && note >= 80){
    console.log('Sua nota é B!')
} else if (note < 80 && note >= 70){
    console.log('Sua nota é C!')
} else if (note < 70 && note >= 60){
    console.log('Sua nota é D!')
} else if (note < 60 && note >= 50){
    console.log('Sua nota é E!')
} else if (note < 50 && note >= 0){
    console.log('Sua nota é F!')
} else {
    console.log('Nota inválida!')
}

//===================================================//

let numberPair = 5;
let numberPair2 = 20;
let numberPair3 = 0;

if(numberPair % 2 === 0 || numberPair2 % 2 === 0 || numberPair3 % 2 === 0 ) {
    console.log("Um dos números é par!")
} else {
    console.log("Nenhum dos números é par!")
}

//===================================================//

let numberOdd = 10;
let numberOdd2 = 20;
let numberOdd3 = 0;

if(numberOdd % 2 !== 0 || numberOdd2 % 2 !== 0 || numberOdd3 % 2 !== 0 ) {
    console.log("Um dos números é impar!")
} else {
    console.log("Nenhum dos números é impar!")
}

//===================================================//