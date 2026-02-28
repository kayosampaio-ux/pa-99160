const listadealunos =[
    { nome: 'Ana', nota: 5.0 },
    { nome: 'Bruno', nota: 10.0},
    { nome: 'Carla', nota: 2.0},
    { nome: 'Andrea', nota: 7.0},
    { nome: 'Marta', nota: 6.0},
];

console.log("\nMostrando apenas nome da aluna marta e sua nota: ")
const usuarioEncontrado = listadealunos.find(u => u.nome === "Marta")
console.log(usuarioEncontrado)

console.log("mostra a media geral da turma.")
const mediaGeral = listadealunos.reduce((total, aluno) => total + aluno.nota, 0) / listadealunos.length
console.log(`Media geral da turma: ${mediaGeral.toFixed(2)}`)

console.log("\nMostrando o nome e a nota dos alunos com nota abaixo de 7.0: ")
const alunosAbaixoDe7 = listadealunos.filter(aluno => aluno.nota < 7.0)
alunosAbaixoDe7.forEach(aluno => {
    console.log(`Nome: ${aluno.nome}, Nota: ${aluno.nota}`)
})

console.log("\nMostrando o nome e a nota dos alunos com nota acima ou igual de 7.0: ")
const alunosAcimaDe7 = listadealunos.filter(aluno => aluno.nota >= 7.0)
alunosAcimaDe7.forEach(aluno => {
    console.log(`Nome: ${aluno.nome}, Nota: ${aluno.nota}`)
})