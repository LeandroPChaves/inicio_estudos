//Programa de adivinhação que dá a opção para o usuário digitar de 0 a 5 e retorna se número está correto ou não//

function pulalinha() {
    document.write ("<br> <br>");
}
function mostra(frase) {
    document.write (frase);
    pulalinha();
}
function sorteio(n) {
    return Math.round(Math.random() * n);
}

var adivinhe = sorteio(5);
var valor = parseInt(prompt ("Digite um valor entre 0 e 5:"));

if (valor > 5) {
    mostra ("Escreva um número entre 0 e 5")
}
else if (adivinhe == valor) {
    mostra ("Você acertou. Parabéns !!!!!");
}
else  {
        mostra ("Você errou. " + "O correto era: " + adivinhe);
}
    
