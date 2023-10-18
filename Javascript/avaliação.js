function verificarPergunta1() {

    var resposta1 = document.getElementById("ipergunta1").value;
    if (resposta1 == "") {

        alert("responda a enquete, por favor!");
    } else {

        alert("Obrigado pela resposta");
    }
}

function verificarPergunta2() {

    var resposta2 = document.getElementById("ipergunta2").value;
    if (resposta2 == "") {

        alert("responda a enquete, por favor!");
    } else {

        alert("Obrigado pela resposta");
    }
}

function verificarPergunta3() {

    var resposta3 = document.getElementById("ipergunta3").value;
    if (resposta3 == "") {

        alert("responda a enquete, por favor!");
    } else {

        alert("Obrigado pela resposta");
    }
}

function verificarPergunta4() {

    var resposta4 = document.getElementById("ipergunta4").value;
    if (resposta4 == "") {

        alert("responda a enquete, por favor!");
    } else {

        alert("Obrigado pela resposta");
    }
}

function verificarPergunta5() {

    var resposta5 = document.getElementById("ipergunta5").value;
    if (resposta5 == "") {

        alert("responda a enquete, por favor!");
    } else {

        alert("Obrigado pela resposta");
    }
}


function calcularPontuacao() {

    var resposta1 = document.getElementById("ipergunta1").value.toLowerCase();
    var resposta2 = document.getElementById("ipergunta2").value.toLowerCase();
    var resposta3 = document.getElementById("ipergunta3").value.toLowerCase();
    var resposta4 = document.getElementById("ipergunta4").value.toLowerCase();
    var resposta5 = document.getElementById("ipergunta5").value.toLowerCase();


    if (resposta1 == "" && resposta2 == "" && resposta3 == "" && resposta4 == "" && resposta5 == "") {


        alert("Por favor,  complete a enquete!");
        return false;

    } else {

        alert(" Enquete respondida com sucesso!");
        return true;
    }



}
