//Incluindo números no Vetor vazio

let valorVetor = []


function incluirNumVetor(valorVetor){

    let vetor = valorVetor

    let num = prompt("Quantos números deseja acrescentar no vetor")
    
    for (let i = 0; i < num; i++){
    
        let valor = prompt("Digite o número que deseja acrescentar no vetor");
    
        vetor[i] = valor;
    
    }
    
    return ("Os valores do vetor são: " + vetor);
    
    }
    
    
    alert (incluirNumVetor(valorVetor)); 