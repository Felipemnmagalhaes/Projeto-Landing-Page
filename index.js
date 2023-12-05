var setaDireita=window.document.getElementById("setadireita")
var Leonardo =window.document.getElementById("leonardo")
var Samantha =window.document.getElementById("samantha")
var Bruna =window.document.getElementById("bruna")
var setaEsquerda=window.document.getElementById("setaesquerda")
function rolarparadireita(){
    Leonardo.style="display:none"
    Bruna.style="display:flex"
    setaDireita.style="display:none"
    setaEsquerda.style="display:flex; margin-top:55px"
}

function rolarparaesquerda(){
    Leonardo.style="display:flex"
    Bruna.style="display:none"
    setaDireita.style="display:flex; margin-top:55px"
    setaEsquerda.style="display:none;"
}