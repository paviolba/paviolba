function validarCadastro() {
    var usuario = document.getElementById("inome").value.toLowerCase;
    var senha = document.getElementById("isenha").value;
    var confirmarSenha = document.getElementById("iconfirmasenha").value;
    var temUpperCase = /[A-Z]/.test(senha);
    var temLowerCase = /[a-z]/.test(senha);
    var temNumbers = /\d/.test(senha);
    var errorMessage = document.getElementById("ierro");

   

    if (senha.length < 8) {
        document.getElementById("ierro").innerHTML = "A senha deve ter pelo menos 8 caracteres.";
        return;
    }

    if (senha !== confirmarSenha) {
        document.getElementById("ierro").innerHTML = "As senhas não coincidem.";
        return;
    }

    if (temUpperCase == ("")) {
        document.getElementById("ierro").innerHTML = "A senha deve conter pelo menos uma letra maiúscula";
        return;

    }

    if (temLowerCase == ("")) {
        document.getElementById("ierro").innerHTML = "A senha deve conter pelo menos uma letra minúscula";
        return;

    }

    if (temNumbers == ("")) {
        document.getElementById("ierro").innerHTML = "A senha deve conter pelo menos um número.";
        return;
    }


    alert("Cadastro bem-sucedido!");
}