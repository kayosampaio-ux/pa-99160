// Atividade VIII - Operações com Dois Números
// Solicita dois números e exibe: média, soma, produto, maior e menor número

// Solicita o primeiro número
const numero1 = parseFloat(prompt("Digite o primeiro número:"));\n
// Solicita o segundo número
const numero2 = parseFloat(prompt("Digite o segundo número:"));\n
// Calcula a média
const media = (numero1 + numero2) / 2;\n
// Calcula a soma
const soma = numero1 + numero2;\n
// Calcula o produto
const produto = numero1 * numero2;\n
// Encontra o maior número
const maior = Math.max(numero1, numero2);\n
// Encontra o menor número
const menor = Math.min(numero1, numero2);\n
// Exibe os resultados na tela (uma linha para cada resultado)
console.log("ATIVIDADE VIII - Operações com Dois Números");\nconsole.log("=============================================");\nconsole.log("Média: " + media);\nconsole.log("Soma: " + soma);\nconsole.log("Produto: " + produto);\nconsole.log("Maior número: " + maior);\nconsole.log("Menor número: " + menor);