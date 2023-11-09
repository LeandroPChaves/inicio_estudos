// Criar um Vetor e pesquisar se um número consta no vetor 
 
// var vetor = new Array ();
// for (var r = 0; r < 5; r++) {
//     var numero = prompt ("Digite um número");
//     vetor [r] = numero;
// }

// var busca = prompt ("Digite um número para descobrir se consta no vetor");

// if(vetor.indexOf(busca)>=0) {
//     alert (`O número ${busca} foi encontrado`);
// }
// else {
//     alert ("O numero " +busca+ " não foi encontrado" );
// }

//------------------------------------------------------------------------------------------------

//Outra forma de Pesquisar número existente no vetor

let lista = [10, 20, 30, 40, 50];

let num = prompt("Escreva um número para testar se é existente");
let resultado = false
function buscaNumero(num){
    for (let i = 0; i < lista.length; i++){
     if (num == lista[i]){
        return (`O número ${num} é existente`);
        resultado = true;
        break;
     } 
    }
    if (resultado == false){
        return ("O Número digitado não existe")
    }
}

alert (buscaNumero(num));


