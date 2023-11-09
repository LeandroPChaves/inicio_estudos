//Programa que mostra o total de pontos do time e se o desempenho melhorou com base na pontuação total de 28 na temporada anterior//

function pulalinha() {
    document.write ("<br> <br>");
}

function mostra(frase) {
    document.write (frase);
    pulalinha();
}

var vitorias = parseInt(prompt("Entre com o número de vitórias."));

var empates = parseInt(prompt("Entre com o número de empates."));

var pontos = (vitorias * 3) + empates;

mostra ("Os pontos do seu time são: " + pontos);

if (pontos > 28) {
    mostra ("Seu time foi melhor esse ano");
}
 else if (pontos == 28) {
     mostra ("Mesmo resultado do ano passado");
 }
  else {
      mostra ("Seu time foi pior esse ano");
  }

 mostra ("FIM");