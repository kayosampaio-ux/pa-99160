// criando um vetor

const listaNomes = ["Marta", "José", "Maria"]

console.log("exibindo tosoa os elementos:")
console.log(listaNomes)

console.log("exibindo o primeiro elemento:")
console.log(listaNomes[0])

console.log("exibindo o segundo elemento:")     
console.log(listaNomes[1])

console.log("\nAdicionando um elemento:")
listaNomes.shift("Mariana")
console.log(listaNomes)  

console.log("\nRemovendo um elemento:")
listaNomes.pop()
console.log(listaNomes)  

console.log("\nRemovendo um elemento especifico:")
// NO indice 1, remover 1 elemento.
listaNomes.splice(1, 1)
console.log(listaNomes)  

