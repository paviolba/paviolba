

function verificarNome() {

    let nome = document.getElementById("inome").value.trim();

    if (nome == "") {
        alert("Por favor, preencha o campo Nome.");
        return false;
    } else {

        alert("Nome preenchido.");
        return true;
    }
}


function verificarSobrenome() {

    var sobrenome = document.getElementById("isobrenome").value.trim();
    if (sobrenome == "") {

        alert("Por favor, preencha o campo Sobrenome.");
        return false;
    } else {
        alert("Sobrenome preenchido.");
        return true;
    }
}

function verificarIdade() {
    var idade = document.getElementById("iidade").value.number();
    if (idade == "") {

        alert("Por favor, preencha o campo idade.");
        return false;
    } else {
        alert("Idade preenchida.");
        return true;

    }

}



function verificarEmail() {
    var email = document.getElementById("iemail").value;
    var arroba = "@";
    var pontocom = ".com";

    if (email.includes(arroba) && email.includes(pontocom)) {

        alert("Email preenchido.");
        return true;

    } else {
        alert("Por favor, preencha o campo email.");
        return false


    }

}

function verificarTelefone() {
    var telefone = document.getElementById("itelefone").value
    if (telefone == "") {

        alert("Por favor, preencha o campo telefone.");
        return false;
    } else {

        alert("Telefone preenchido.");
        return true;
    }

}

function verificarData() {
    var datanascimento = document.getElementById("idn").value.number();
    if (datanascimento == "") {

        alert("Por favor, preencha o campo data de nascimento.");
        return false;
    } else {
        alert("DN preenchida.");
        return true;

    }
}


function verificarEstadoCivil() {

    var estadoCivil = document.getElementById("iestadoCivil").value;
    if (estadoCivil == "") {

        alert("Por favor, preencha o campo estado civil ");
        return false;
    } else {

        alert("Estado civil preenchido");
        return true;
    }


}


function verificarCpf() {

    var cpf = document.getElementById("icpf").value;
    if (cpf.length !== 11) {
        alert("Por favor, preencha o campo CPF com 11 dígitos.");
        return false;

    } else {

        var cpfFormatado = cpf.substring(0, 3) + "." + cpf.substring(3, 6) + "." + cpf.substring(6, 9) + "." + cpf.substring(9);
        alert("CPF preenchido: " + cpfFormatado);
        return true;


    }

}



function verificarIdentidade() {
    var identidade = document.getElementById("iid").value.number();

    if (identidade == "") {

        alert("Por favor, preencha o campo identidade.");
        return false;
    } else {
        alert("Id preenchida.");
        return true;
    }

}
function verificarEndereço() {

    var endereço = document.getElementById("iendereço").value;
    if (endereço == "") {

        alert("Por favor, preencha o campo endereço.");
        return false;
    } else {

        alert("Endereço preenchido");
        return true;
    }

}


function verificarCidade() {
    var cidade = document.getElementById("icidade").value;

    if (cidade == "") {

        alert("Por favor, preencha o campo cidade.");
        return false;
    } else {

        alert("Cidade preenchida");
        return true;
    }

}

function verificarEstado() {
    var estado = document.getElementById("iestado").value;
    if (estado == "") {

        alert("Por favor, preencha o campo estado.");
        return false;
    } else {
        alert("Estado preenchido");
        return true;
    }

}

function verificarCep() {
    var cep = document.getElementById("icep").value;

    if (cep.length !== 9) {

        alert("Por favor, preencha o campo cep.");
        return false;
    } else {

        var cepFormatado = cep.substring(0, 5) + "-" + cep.substring(5);
        alert("CEP preenchido: " + cepFormatado);
        return true;
    }

}

function verificarNomeMãe() {

    var nomemae = document.getElementById("inomemae").value.trim();
    if (nomemae == "") {

        alert("Por favor, preencha o campo Nome da mãe.");
        return false;
    } else {
        alert("Nome mãe preenchido");
        return true;
    }

}


function verificarNomePai() {

    var nomepai = document.getElementById("inomepai").value.trim;
    if (nomepai == "") {

        alert("Por favor, preencha o campo nome do pai.");
        return false;
    } else {

        alert("Nome pai preenchido");
        return true;
    }

}

function verificarCriança() {

    var criança = document.getElementById("icriança").value;

    if (criança == "") {
        alert("Por favor, preencha o campo criança");
        return false;
    } else {
        alert("Campo criança preenchido");
        return true;
    }

}


function verificarNecessidade() {
    const necessidade = document.getElementById("iidadeCrianças").value;

    if (necessidade == "") {
        alert("Por favor, preencha o campo idade das crianças.");
        return false;
    } else {
        alert("Idade crianças preenchido");
        return true;
    }

}


function verificarTemNecessidade() {
    const temNecessidade = document.getElementById("ipce").value;

    if (temNecessidade == "") {
        alert("Por favor, preencha o campo tem necessidade.");
        return false;
    } else {

        alert("Tem necessidade preenchida");
        return true;
    }


}


function verificarNecessidade1() {
    const necessidade1 = document.getElementById("inecessidade").value;

    if (necessidade1 == "") {
        alert("Por favor, preencha o quadro tem necessidade .");
        return false;
    } else {
        alert("Descreva sua necessidade preenchida preenchida.");
        return true;
    }

}


function verificarAnimal() {
    const animal = document.getElementById("ianimal").value;

    if (animal == "") {
        alert("Por favor, preencha o animal.");
        return false;
    } else {

        alert("Animal preenchido.");
        return true;

    }

}


function verificarQuantidade() {
    const quantidade = document.getElementById("iquartos").value;

    if (quantidade == "") {
        alert("Por favor, preencha o campo número de quartos");
        return false;
    } else {

        alert("Quartos preenchidos.");
        return true;
    }

}

function verificarQuantidade1() {
    const quantidade1 = document.getElementById("ihospedes").value;

    if (quantidade1 == "") {
        alert("Por favor, preencha o campo número de hóspedes.");
        return false;
    } else {
        alert("Quantidade de quartos preenchida.");
        return true;

    }


    alert("O formulário foi entregue");
    return true;




}


