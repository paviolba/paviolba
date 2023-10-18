function verificar() {

    let nome = document.getElementById("inome").value.toLowerCase();

    if (nome == "") {
        alert("Digite seu nome, por favor.");


    } else {
        alert("Nome preenchido");
    }



    let aux = document.getElementById("iemail").value.toLowerCase();

    if (aux == "") {
        alert("Digite seu email, por favor.");


    } else {
        alert("email preenchido");
    }



    let tel = document.getElementById("itelefone").value;

    if (tel == "") {
        alert("Digite seu telefone, por favor.");


    } else {
        alert("Telefone preenchido");
    }


    let i = document.getElementById("iquartos").value;

    if (i == "") {
        alert("Preencha o campo");


    } else {
        alert("Quarto preenchido");
    }


    let j = document.getElementById("ihospedes").value;

    if (j == "") {
        alert("Preencha o campo");


    } else {
        alert("Hóspedes preenchido.");
    }

    if (j != "" && i != "" && tel != "" && aux != "" && nome != "") {

        alert("Formulário entregue");

    }



}
