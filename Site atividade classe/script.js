function calcular(){

let n1 = Number(document.getElementById("n1").value);
let n2 = Number(document.getElementById("n2").value);

let soma = n1 + n2;
let media = soma / 2;
let produto = n1 * n2;

let maior = Math.max(n1,n2);
let menor = Math.min(n1,n2);

let mensagem = "";

if (soma === 22){
    mensagem = "Resultado especial: Capitão Bolsonaro";
} 
else if (soma === 13){
    mensagem = "Resultado especial: Papai Lula da picanha";
} 
else{
    mensagem = `
    Soma: ${soma} <br>
    Média: ${media} <br>
    Produto: ${produto} <br>
    Maior número: ${maior} <br>
    Menor número: ${menor}`;
}

document.getElementById("resultado").innerHTML = mensagem;

}