// atividade

// crie uma função para verificar media aritimetica

notas[5, 5, 5]
const media = (notas) => {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

console.log("Media: ", media(notas))
