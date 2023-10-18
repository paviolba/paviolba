function verificar() {

    var nome = document.getElementById("iname").value.toLowerCase();
    var email = document.getElementById("iemail").value.toLowerCase();
    var mensagem = document.getElementById("imessage").value.toLowerCase();

    if (nome == "") {
        alert("Por favor preencha o nome.");
        return false;
    }

    if (email == ""  ) {
        alert("Por favor preencha o email.");
        return false;
    }

    if (mensagem == "") {
        alert("Por favor escreva a messagem.");
        return false;
    }

    alert("Formulário enviado.");
    return true;
}