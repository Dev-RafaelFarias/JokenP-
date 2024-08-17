

// Primeiro passo reconhecer botão clicado pelo usuário
const clickHuman = humanChoice => {
    game(humanChoice, playMachine()) //Pegar a escolha do usuário e convergir com a IA

}

//Reconhecer escolha da maquina-IA 
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3) // Numero aleatóreo sempre arredondando para baixo
    return choices[randomNumber]
}


//Verificar o Ganhador
const result = document.querySelector('.result')
const scoreHuman = document.querySelector("#score-Human")
const scoreIa = document.querySelector("#score-Ia")

let scoreHumanNumber = 0
let scoreIaNumber = 0

const game = (human, ia) => {
    console.log('Usuário: ' + human + ' Ia: ' + ia)

    if (human === ia) {
        result.innerHTML = "Empatou Ninguém Ganhou!"

    } else if (
        (human === 'paper' && ia === 'rock') ||
        (human === 'rock' && ia === 'scissors') ||
        (human === 'scissors' && ia === 'paper')
    ) {
        scoreHumanNumber++
        scoreHuman.innerHTML = scoreHumanNumber
        result.innerHTML = "Você Ganhou!"

    } else {
        scoreIaNumber++
        scoreIa.innerHTML = scoreIaNumber
        result.innerHTML = "Perdeu Para IA!"

    }
}