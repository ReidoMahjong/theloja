function pd1() {
    document.getElementById("categoria").innerHTML="<b>One Piece</b>"
    document.getElementById("destaque").src="imagens/produtos/one piece/zoro.png"
    document.getElementById("nome").innerHTML="<b>Zoro</b>"
    document.getElementById("preco").innerHTML="<b>R$19,50</b>"
}

function pd2() {
    document.getElementById("categoria").innerHTML="<b>Vocaloid</b>"
    document.getElementById("destaque").src="imagens/produtos/vocaloid/miku.png"
    document.getElementById("nome").innerHTML="<b>Hatsune Miku</b>"
    document.getElementById("preco").innerHTML="<b>R$2.500.000,00</b>"
}

function pd3() {
    document.getElementById("categoria").innerHTML="<b>Valorant</b>"
    document.getElementById("destaque").src="imagens/produtos/valorant/Phoenix.png"
    document.getElementById("nome").innerHTML="<b>Phoenix</b>"
    document.getElementById("preco").innerHTML="<b>R$523,50</b>"
}

function pd4() {
    document.getElementById("categoria").innerHTML="<b>Honkai: Star Rail</b>"
    document.getElementById("destaque").src="imagens/produtos/starrail/sparkle.png"
    document.getElementById("nome").innerHTML="<b>Sparkle</b>"
    document.getElementById("preco").innerHTML="<b>R$66.666,69</b>"
}

function compra() {
    document.getElementById("container").style.display="flex"
}

function cancela() {
    document.getElementById("container").style.display="none"
}