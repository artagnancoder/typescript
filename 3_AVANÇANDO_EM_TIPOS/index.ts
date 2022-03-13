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
setTimeout(function(){

    const sllary: number = 1000;
}, 2000)

