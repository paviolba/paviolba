let imagens = ["lagoaazul.jpg", "lagoaparai.jpg", "centro.webp", "pedrafurada.jpg", "dunacentral.jpg"];
let textos = ["Lagoa Azul", "Lagoa paraíso", "Centro", "Pedra furada", "Duna central"];
let indice = 0;

function mostrarConteudo() {
    document.getElementById("iimagem").src = imagens[indice];
    document.getElementById("itexto").textContent = textos[indice];
}

function proximo() {
    if (indice < imagens.length - 1) {
        indice++;
    } else {
        indice = 0;
    }
    mostrarConteudo();
}

function anterior() {
    if (indice > 0) {
        indice--;
    } else {
        indice = imagens.length - 1;
    }
    mostrarConteudo();
}

mostrarConteudo();