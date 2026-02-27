// vetor de objetos
const usuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Bruno", idade: 22},
    {nome: "Carla", idade: 30}

]

console.log("exibindo todos os usuarios de vetor: ")
usuarios.forEach(usuario => {
    console.log(`${usuario.nome} tem: ${usuario.idade} anos`)
})

console.log("\nFiltrando idade maior que 18: ")
const maioresde18 = usuarios.filter
    (usuario => usuario.idade > 18
)

// exibindo todos os elementos do vetor. 
maioresde18.forEach(usuario => 
    console.log(`${usuario.nome} tem ${usuario.idade}`)
)

console.log("\nMostrando apenas nomes: ")
const listadenomes = usuarios.map(u => u.nome)
listadenomes.forEach( nome => console.log(`${nome}`))

console.log("\nMostrando apenas nomes: ")
const usuarioEncontrado = usuarios.find(u => u.nome === "Carla")
console.log(`Nome: ${usuarioEncontrado.nome} \nidade:  ${usuarioEncontrado.idade} `)