//programa que calcuma o IMC e retorna an informação se está abaixo, acima ou no índice correto//

function pulalinha() {
    document.write ("<br>" + "<br>");
}

function mostra(frase) {
    document.write(frase);
    pulalinha();
}

function calculaImc(peso, altura) {
    return peso/(altura * altura);
}

var nome = prompt("Digite o seu nome: ");
var digaPeso = prompt(nome + " " + "Digite o seu peso ");
var digaAltura = prompt(nome + " " + "Digite a sua altura");
var imc = calculaImc(digaPeso, digaAltura);

if (imc >= 16 && imc < 17) {
    mostra("O sei IMC é: " + Math.round(imc))
    mostra ("Você está muito abaixo do peso.")
} 
 else if (imc >= 17 && imc < 18.5){
     mostra("O sei IMC é: " + Math.round(imc))
     mostra ("Você está abaixo do peso.")
 }
   else if (imc >= 18.5 && imc < 25){
       mostra("O sei IMC é: " + Math.round(imc))
       mostra ("Você está no peso normal.")
   }
    else if (imc >= 25 && imc < 30){
        mostra("O sei IMC é: " + Math.round(imc))
        mostra ("Você está acima do peso.")
    }
      else if (imc >= 30 && imc < 35){
         mostra("O sei IMC é: " + Math.round(imc))
         mostra ("Você está na Obesidade Grau 1")
      }
        else if (imc >= 35 && imc <= 40){
         mostra("O sei IMC é: " + Math.round(imc))
         mostra ("Você está na Obesidade Grau2.")
        }
            else if (imc > 40){
              mostra("O sei IMC é: " + Math.round(imc))
              mostra ("Você está no Obesidade Grau3")
            }
            else{
                mostra("O sei IMC é: " + Math.round(imc))
                mostra ("Valor não está na tabela oficial oficial de IMC")
            }

 




