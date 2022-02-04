// 1 - numbers
let x: number = 10; //integer

console.log(typeof x); /* = number */

const y: number = 15.4234 //float

console.log(y.toPrecision(3)); //muda a precisão do número para 3 casas
              // toPrecision() é um método numérico.

// 2 - string

const firstName: string = "Igor       "
console.log(firstName);

console.log(firstName.toUpperCase());
                        //métodos de string

//É uma boa prática tipar uma variável que é iniciada sem um valor definido.                        

// 3 - booleans

let a: boolean = false
console.log(a);
console.log(typeof a);

// 4 - inference e annotation

//annotation
let ann: string = "Teste"

//inference
const inf = "Teste"

//desafio 2
/*
1- Crie uma variável que recebe um número
2- Converta este número para string em uma nova variável
3- Esta variável de conversão deve estar tipada por inferência
4- Imprima este número em uma string maior, utilizando o recurso de template strings ou concatenação.
*/

const myNum = 10
const numToString = myNum.toString()
console.log(`My number is ${myNum}`);

// solução curso

const n1: number = 10
const numberToString = n1.toString()
const printMyNumber: string = `Eu vou imprimir o número ${numberToString}`
console.log(printMyNumber);

