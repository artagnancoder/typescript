//Arrays

//array de números: number[] 

let numbers: number[] = [1, 2, 3, 4]
let nums: Array<number> = [1, 2, 3, 4]

//array de strings: string[]

let alphabet: string[] = ['a', 'b', 'c']
let alpha: Array<string> = ['a', 'b', 'c']

//Any

//Casos de uso: quando o tipo de dado não importa e em arrays com dados múltiplos.

let data: any[] = ['a', 1, 'b', 2]

//functions tipadas - argumentos

//sintaxe: function minhaFuncao(argumento: tipo){}

function soma(a: number, b: number) {
    console.log(a + b);
}

//functions tipadas - retorno

//sintaxe: function minhaFuncao(argumento: tipo):tipo{}

function greeting(name: string): string {
    return `Ola ${name}`
}

//funções anônimas

//set timeOut executa algo depois de um tempo determinado.
setTimeout(function () {

    const sllary: number = 1000;
}, 2000)

//Objetos

//sintaxe {prop: tipo, prop2: tipo}

function passCoordinates(coord: { x: number, y: number }) {
    console.log('X coordinates: ' + coord.x);
    console.log('X coordinates: ' + coord.y);
}

const objCoord = { x: 321, y: 13.0 }

passCoordinates(objCoord)

//propriedades opcionais
//sintaxe {prop: tipo, prop2?: tipo} / prop2 torna-se opcional

function showNumbers(a: number, b: number, c?: number) {
    console.log(a, b, c);
}

//validação de propriedades/argumentos opcionais

//nunca declarar os argumentos opcionais primeiro
function advancedGreeting(firstName: string, lastName?: string) {
    if (lastName !== undefined) {
        return console.log(`Olá, ${firstName} ${lastName}, tudo bem?`);       //early return
    }
    console.log(`Olá ${firstName}, tudo bem?`);
}

//Union types - declarar dois tipos para um dado

function showBalanca(balance: number | string) {
    console.log(`O saldo da conta é R${balance}`);
}

//array de múltiplos valores
const array2: Array<number | string | boolean> = [2, 'teste', true];

//pode- se usar o typeof para fazer validações relacionadas

function showUserRole(role: boolean | string) {
    if (typeof role === "boolean") {
        return "usuário não aprovado!"
    }

    return `A função do usuário é: ${role}`
}

//type alias- recurso que permite criar um tipo e determinar o que ele verifica

type ID = string | number // <= ALIAS

function showId(id: ID) {
    console.log(`O Id é: ${id}`);   //Uma forma de resumir valores
}

//INTERFACES

//Maneira de nomear um tipo de objeto
//Podemos determinar um nome para o tipo e escolher as propriedades e seus tipos

//Usada também para tipar objetos
interface POINT {
    x: number,
    y: number,
    z: number
}

function showCoords(obj: POINT) {
    console.log(obj);
}

const coordObj: POINT = {
    x: 10,
    y: 20,
    z: 40
}

//INTERFACE X TYPE ALIAS

//A diferença entre alias e interface é que a interface pode ser alterada ao longo do código.

interface Person {
    name: string
}

interface Person {     //A propriedade age foi implementada na interface Person
    age: number
}


const somePerson: Person = { name: "Igor", age: 25 }

type personType = {
    name: string
}

/*type personType = {  //Erro de variável duplicada
    age: number
} */

//LITERAL TYPES

//recurso que permite colocar valores como tipos
//restringe o uso a tipos e valores
//recurso muito utilizado com Union types

let test: "testando"

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é ${direction}`);
}

//NON-NULL ASSERTION OPERATOR

//As vezes o ts pode evidenciar um erro, baseado em um valor que no momento do código ainda não está disponível
//Porém se sabemos que este valor será preenchido, podemos evitar o erro
//Utilizamos o caractere !

//selecionar um elemento html por id para mostrar o seu valor

const p = document.getElementById("some-p")

console.log(p!.innerText);

//Bigint

//usado para declarar valores altos
//podemos utilizar a notação literal, exemplo: 100n
//Para este recurso precisamos mudar a configuração do TS para a versão ES2020

let n: bigint;

n = 1000n;

//Symbol

//Symbol cria uma referência única para um valor
//Mesmo que ele possua o mesmo valor de outra variável, teremos valores sendo considerados diferentes

let symbolA: symbol = Symbol("a")
let symbolB: symbol = Symbol("a")

console.log(symbolA === symbolB); //irá imprimir FALSE

