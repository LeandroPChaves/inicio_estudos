//Através de um vetor dado, eu pesquiso qual é o índice do número informado. Se o número não estiver no vetor, 
//retorna -1

// var vetor = [2, 3, 8, 1, 5];

// function busca(num){
// for (var i = 0; i < 5; i++){
//     if (num == vetor[i]){
//         return i
//     }
// }
// return -1;
// }


//-------------------------------------------------------------------------------------------------------------

//Buscar um número começando na metade do vetor e somar ou diminuir o índice até encontrar.
// No final mostrar o índice do número encontrado e quantos passos foram necessários. 
// Se o número não for encontrado, retornar -1.

var vetor = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120];

function buscar(num){
    let inicio = 0
    let fim = 9
    let passos = 0
    while (inicio <= fim){
        let meio = parseInt((inicio + fim)/2)
        passos = passos + 1
        if (num == vetor[meio]){
            return (`O número ${num} está localizado na posição ${meio}. Foram necessários ${passos} passos para encontrar`)
        } else 
          if (num > vetor[meio]) {
              inicio = meio + 1
        } else {
              fim = meio - 1
        }
    } 
    return (`O número ${num} não foi encontrado no vetor. Foram realizadas ${passos} tentativas`)  
 }
 
 
