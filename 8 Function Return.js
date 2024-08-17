 /*
    Função void (Vazia) não retorna nada
    Função return, retorna um valor para quem chamou a função
 */

    function sum(value1, value2){ //VOID
    console.log(value1 + value2)
}
    sum(15, 15)



    function sub(value1, value2){ //VOID
    console.log(value1 - value2)
}
    const result = sub(96, 68)
    console.log(result + " resultado") //Undefined sem retorno


    //Return pode ser das seguintes formas

    function mult(value1, value2) {
    return value1 * value2
}
    const total = mult(4, 5)
    console.log(total + " resultado")

    
 
    function mult(value1, value2) {
    const ou = value1 * value2  //Variável ou podendo ser mandada para fora da função apenas por conta do return
    return ou
}
    const ou = mult(4, 5)
    console.log(ou + " resultado")



    function div(value1, value2){
        const dividir = value1 / value2
        return dividir  // return sempre será a última coisa da função, pois quando ela o encontra ela para de rodar.
    }
        console.log(div(40, 4))