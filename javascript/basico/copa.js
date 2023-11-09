//Programa que mostra o total de copas realizadas e o ano de cada uma.//
 
 function pulalinha() {
    document.write ("<br> <br>");
}

function mostra(frase) {
    document.write (frase);
    pulalinha();
}

let inicioCopa = 1930;
let quantCopa = 0;
let anosCopa = new Array();

while (inicioCopa <= 2022) {
    quantCopa = quantCopa + 1;
    anosCopa.push(inicioCopa);
    inicioCopa = inicioCopa + 4;
}

for (var i = 0; i < anosCopa.length; i++){
    if (anosCopa[i] == 1934){
        quantCopa = quantCopa - 1;
        anosCopa.splice(i,1);
    }
    if (anosCopa[i] == 1938){
        quantCopa = quantCopa - 1;
        anosCopa.splice(i,1);
    }
}

mostra (`A quantidade total de copas são: ${quantCopa}`);
mostra (`As copas foram realizadas nos anos de: ${anosCopa}`);