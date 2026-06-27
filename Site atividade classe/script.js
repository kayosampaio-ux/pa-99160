function calcular() {
    const resDiv = document.getElementById("resultado");
    
    // Efeito de "processando" no painel
    resDiv.style.opacity = "0";
    
    setTimeout(() => {
        let n1 = Number(document.getElementById("n1").value);
        let n2 = Number(document.getElementById("n2").value);

        let soma = n1 + n2;
        let media = soma / 2;
        let produto = n1 * n2;
        let maior = Math.max(n1, n2);
        let menor = Math.min(n1, n2);

        let mensagem = "";

        if (soma === 22) {
            mensagem = "<span class='special'>ALERTA: Capitão detectado 🫡</span>";
        } 
        else if (soma === 13) {
            mensagem = "<span class='special'>ALERTA: Picanha liberada 🥩</span>";
        } 
        else {
            mensagem = `
                <div class="res-item"><span>SOMA:</span> ${soma}</div>
                <div class="res-item"><span>MÉDIA:</span> ${media}</div>
                <div class="res-item"><span>PRODUTO:</span> ${produto}</div>
                <div class="res-item"><span>MAIOR:</span> ${maior}</div>
                <div class="res-item"><span>MENOR:</span> ${menor}</div>
            `;
        }

        resDiv.innerHTML = mensagem;
        resDiv.style.opacity = "1";
    }, 200);
}