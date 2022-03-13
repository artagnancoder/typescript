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

function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "usuário não aprovado!"
    }

    return `A função do usuário é: ${role}`
}