let num = prompt("Digite o número que deseja fatorar");
let contador = num - 1;
let total = 0;

while(contador > 0){
    let resultado = num * contador;
    console.log (`${num} * ${contador} =  ${resultado}`);
    total = total + resultado;
    contador--;
}

console.log(`O total é: ${total}`);
