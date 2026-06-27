function calcular(){

let quantidade = document.getElementById("quantidade").value;

let preco;

if(quantidade < 12){
preco = 1.30;
}else{
preco = 1.00;
}

let total = quantidade * preco;

document.getElementById("resultado").innerHTML =
"Total da compra: R$ " + total.toFixed(2);

}