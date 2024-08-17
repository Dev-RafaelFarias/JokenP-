/* Estrutura de repetição -> Loop = laço

FOR
1 -> INICIALIZAÇÃO = Criar uma variável e colocar um valor inicial para ela
2 -> CONDIÇÃO = Enquanto for TRUE, o laço continuará iterando. Ele irá verificar antes de cada iteração.
3 -> EXPRESSÃO FINAL = O que irá ocorrer a cada vez que o nosso laço der uma volta

for ([inicialização]; [condição]; [expressão final]) {
    Código aqui
}
*/

for (let i = 0; i < 10; i++) {
    console.log(i)
} // executa enquanto o valor for TRUE, ou seja, enquanto o valo de i for menor que 15.

const user = ["Rafael", "Thais", "Raul",]

for(let i = 0; i < user.length; i++ ){
    console.log(user[i])    
} // Estrutura basicamente automatizada
