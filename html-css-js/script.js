document.getElementById("gerarBotao").addEventListener("click", function() {
    const num = document.getElementById("numeroInput").value;
    const resultadoDiv = document.getElementById("resultadodatabuada");

    // Limpa o resultado anterior
    resultadoDiv.innerHTML = "";

    if (num === "") {
        resultadoDiv.innerHTML = "<p style='color: yellow;'>Insira um número, Leão!</p>";
        return;
    }

    let n = Number(num);

    // Gera a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
        setTimeout(() => {
            const linha = document.createElement("div");
            linha.className = "tabuada-linha";
            linha.innerHTML = `${n} x ${i} = <span>${n * i}</span>`;
            resultadoDiv.appendChild(linha);
        }, i * 50); // Efeito cascata
    }
});