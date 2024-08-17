/*
Foreach serve para iterar array's. Executa uma finção para cada elemento de um array
ForEach(intem, index, array)
*/

const contacts = [
    { name: "Rafael", contact: "(21) 977267226" },
    { name: "Thais", contact: "(21)99265-8440" },
    { name: "Raul", contact: "(21)99234-0314" },
    { name: "Vó Marli", contact: "(21)97604-6482" },
    { name: "Mãe Regina", contact: "(21) 912345678"},
    { name: "Pai Eduardo", contact: "(21) 987654321"},
]

contacts.forEach((item, index) => {
    console.log(item, index) // index a posição do array
});

contacts.forEach((item, index) => {
    console.log(index)
    console.log(item)
});

contacts.forEach( function(item, i, array){
   console.log(item)
   console.log(i)
   console.log(array) 
});

contacts.forEach(item => {
    console.log(`Nome:${item.name} Contato:${item.contact}`)
});

contacts.forEach((item, index) => {
   console.log(`${index +1}) Nome:${item.name} Contato:${item.contact} `)
});