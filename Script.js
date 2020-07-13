

const $vermelho = document.getElementById("botao");
const $teste = document.getElementById("teste");

function mudarcor () {
    $teste.style.backgroundColor = "red";
}

$vermelho.addEventListener("click", mudarcor)