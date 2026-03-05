// vetor

const numeros = [1, 2, 3, 4, 5];

// usandoo Map, crie um vetor com os numeros
// do vetor numewros multiplicados por 2
const dobrados = numeros.map(num => num * 2);
console.log("Vetor de numeros: ", numeros);
console.log("dobrados: ", dobrados);

// filtre os elementos do vetor numeros para criar um novo vetor
// que contenha apenas os numeros pares
const pares = numeros.filter(num => num % 2 === 0);
console.log("numeros pares: ", pares);

// usando o reduce, calcule a soma de todos os elementos do vetor numeros
const soma = numeros.reduce((acc, num) => acc + num, 0);
console.log("Soma dos numeros: ", soma);