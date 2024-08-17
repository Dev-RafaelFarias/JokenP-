/* function -> Trecho de código que é executado somente quando solicitado */

const nome = "Thaís"
console.log(nome)

function nomeNaTela(){
    console.log("Raul")
}
nomeNaTela() //Solicitando função

function sayMyName(name) {
    console.log(name)
}
 sayMyName() // Undefined = quando não é adicionado valor
 sayMyName("Rafael") //Enviando nome ao parâmetro da função "name" ↕
 sayMyName("Farias")
 sayMyName("Batista") // Função pode ser reutilizada

 function sum(value1, value2) {
    console.log(value1 + value2)
 } // Para enviar mais de um parâmetro
sum(25, 25)

function sub(value1, value2){
    console.log(value1 - value2)
}
sub(45, 15)

function mult(value1, value2){
    console.log(value1 * value2)
}
mult(8, 15)

function div(value1, value2){
    console.log(value1 / value2)
}
div(100, 4)

function calc(value1, value2, value3, value4){
    console.log(value1 * value4 + value3 / value2)
}
calc(20, 8, 16, 4)

// Adicionando valor padrão ao parâmetro

function myName(name = "Nome não encontrado"){
    console.log(name)
}
myName() //sem adicionar valor, resultado = "Nome não encontrado"


let myAge = 28

function age(age = myAge){
    console.log(age)
}
age()