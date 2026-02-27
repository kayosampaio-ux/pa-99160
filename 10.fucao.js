//  função
function cabecalho() {
    console.log("==========")
    console.log("=== Senai ===")
    console.log("==========")
}



function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

const adicao = somar(2, 3)

const subtracao = subtrair(2, 3)
console.log(`soma: ${adicao}`);
console.log(`subtracao: ${subtracao}`);

// chamada da funcao
cabecalho()

const soma = somar(2, 3)
console.log(`Soma: ${soma}`)
