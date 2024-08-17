const user = { name: "Rafael", age: "28", city: "Rio de Janeiro"}


// user.name -> Rafel
// user.['name'] -> Rafael


for (const key in user) {
   console.log(`${key} : ${user[key]}`)
}