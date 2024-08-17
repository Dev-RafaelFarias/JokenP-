


const produtos = [
    {product: "Arroz", price:"R$34,99"},
    {product: "Feijão", price:"R$19,99"},
    {product: "Macarrão", price:"R$14,99"},
    {product: "Oleo", price:"R$49,99"},
    {product: "Linguiça", price:"R$59,80"},
    {product: "Batatas", price:"R$29,99"},
    {product: "Ovos", price:"R$30,00"},
    {product: "Alho", price:"R$15,60"},   
]


const cart = [34.99, 19.99, 14.99, 49.99, 59.80, 29.99, 30, 15.60]
let valorFinal = 0

function calculateDiscount(price, discont){
    const result = (price * discont) / 100
    return result
}
calculateDiscount(255.35, 10)


cart.forEach((value) => {

    if (value > 30){
        const disconto = calculateDiscount(value, 10)
        valorFinal = valorFinal + (value - disconto)
    }
    else{
        valorFinal += value
    }

   });
  