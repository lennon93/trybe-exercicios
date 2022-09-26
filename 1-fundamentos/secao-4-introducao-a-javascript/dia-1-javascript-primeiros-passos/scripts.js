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