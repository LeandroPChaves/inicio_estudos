//Programa que cria uma lista de vetores com destinos de viagens (Salvador, São Paulo e Rio de janeiro), inclui Curitiba e exclui São Paulo e no final, mostra os locais conforme posição no vetor.

console.log(`Trabalhando com listas`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) // adicionando um item na lista
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);