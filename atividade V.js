// considerando a media 7,0 para aprovação informe se esta aprovado ou reprovado. 

const nome = prompt("Digite seu nome:");
const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));

const media = (nota1 + nota2) / 2;

if (media >= 7.0) {
    alert(`Parabéns, ${nome}! Você foi aprovado com média ${media.toFixed(2)}.`);
} else {
    alert(`Sinto muito, ${nome}. Você foi reprovado com média ${media.toFixed(2)}.`);
}
