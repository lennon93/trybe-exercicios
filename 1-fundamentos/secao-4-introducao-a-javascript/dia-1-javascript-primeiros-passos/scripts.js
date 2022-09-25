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