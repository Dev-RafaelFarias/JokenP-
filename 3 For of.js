// Estrutura de Repetição - LOOP -> FOR OF
// iterar seria -> visitar item por item

const myName = "Rafael"
const user = ["Thais", "Raul", "Araujo", "Farias", "Batista", ]

for (const name of user) {
    console.log(name)
}

/* 
    letter = letra por letra
    name = nome
    contact = contatos
*/

for (const contatos of contatos) {
    if(input.value.toLowerCase() === contatos.name.toLowerCase()){
        paragrafo.innerHTML = `Contato Encontrado:
        ${contatos.name}
        ${contatos.number}`
    }
}