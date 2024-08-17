// Ferramenta para encurtar o código 

function sayMayName(name) {
    return `Seu nome é ${name}`
}

// Caso for apenas com um parâmetro (name) os parênteses são opcionais. Com ou sem o resultado é o mesmo.
const sayMayName2 = name => `Seu nome é ${name}`    // na mesma linha não precisa de return 

console.log(sayMayName('Rafael'))
console.log(sayMayName2("Raul"))


//Para dois ou mais parâmetros
const sum = (number1, number2, number3) => number1 + number2 + number3

console.log(sum(5,25,27))
