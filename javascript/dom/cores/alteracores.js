function preto() {
    document.getElementById('quadrado1').style.background="#000000";
    document.getElementById('quadrado2').style.background="#000000";
    document.getElementById('quadrado3').style.background="#000000";
    document.getElementById('quadrado4').style.background="#000000";
    var titulo = document.querySelector("h1");
    titulo.innerText = "Função mudou tudo para a cor preta";
}

function amarelo() {
    document.getElementById('quadrado1').style.background="yellow";
    document.getElementById('quadrado2').style.background="yellow";
    document.getElementById('quadrado3').style.background="yellow";
    document.getElementById('quadrado4').style.background="yellow";
    var titulo = document.querySelector("h1");
    titulo.innerText = "Função mudou tudo para a cor amarela";
}

function none() {
    document.getElementById('quadrado1').style.display="none";
    document.getElementById('quadrado2').style.display="none";
    document.getElementById('quadrado3').style.display="none";
    document.getElementById('quadrado4').style.display="none";
    var titulo = document.querySelector("h1");
    titulo.innerText = "SUMIU";
}  

