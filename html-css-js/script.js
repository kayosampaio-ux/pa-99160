function gerartabuada() {

    // pegar o valor do input no Html.
    const numeroinput = document.getElementById("numeroInput");
    let numero = parseInt(numeroinput.value);

    // pegar o elemento HTML onde a tabuada será exibida.
    const resultadoDiv = document.getElementById("resultadodatabuada");
    resultadoDiv.innerHTML = "";

    // verificar se a entrada é um numero válido
    if (isNaN(numero)) {
        resultadoDiv.innerHTML = "Por favor, digite um número...";
        return;
    }

    // adiciona um titulo para tabuada.
    resultadoDiv.innerHTML += `<h2>Tabuada do ${numero}</h2>`;

    // laço de repeticão para gerar a tabuada de 1 até 10.
    for(let i = 1; i <= 10; i++) {

        let resultado = numero * i;

        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }

}

const gerarBotao = document.getElementById("gerarBotao");
gerarBotao.addEventListener("click", gerartabuada);