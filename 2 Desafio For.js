let paragrafo = document.querySelector("p")
let input = document.querySelector("input")

const contatos = [
    {name: "Rafael", number: "(21)97726-7226"},
    {name: "Thais", number: "(21)99265-8440"},
    {name: "Raul", number: "(21)99234-0314"},
    {name: "Vó Marli", number: "(21)97604-6482"},    
]

function procurar() {
    // for(let i = 0; i < contatos.length; i++){
    //     if(input.value.toLowerCase() === contatos[i].name.toLowerCase()){ // toLowerCase() Para letra minusculas ou maiusculas
    //         paragrafo.innerHTML = `Contato encontrado: 
    //         ${contatos[i].name}
    //         ${contatos[i].number}`

    //         // Ou = "Contato Encontrado:" + conatos[i].name + "Tel:" + conatos[i].number
        
    //         break // para de rodar ao encontrar o valor desejado
    //     } else { // else caso não encontre o contato
    //         paragrafo.innerHTML = "Contato não Encontrado."
    //     }
    // }

    <script src="./2 Desafio For.js"></script>
 // for para for of
    for(const contact of contatos){
        if(input.value.toLowerCase() === contact.name.toLowerCase()){
            paragrafo.innerHTML = `Contato Encontrado:
            ${contact.name};
            ${contact.number};`

            break
        } else{
            paragrafo.innerHTML = "Contato não encontrado."
        }
    }

}