function calcularPontuacao() {
    let respostasCorretas = {
        pergunta1: "pedrafurada",
        pergunta2: "2002",
        pergunta3: "8416",
        pergunta4: "1991",
        pergunta5: "indios",

    }

    let pontuacao = 0;

    for (var pergunta in respostasCorretas) {
        let primeiraRespostaUsuario = document.getElementById("ipergunta1").value.toLowerCase();
        let segundaRespostaUsuario = document.getElementById("ipergunta2").value.toLowerCase();
        let terceiraRespostaUsuario = document.getElementById("ipergunta3").value.toLowerCase();
        let quartaRespostaUsuario = document.getElementById("ipergunta4").value.toLowerCase();
        let quintaRespostaUsuario = document.getElementById("ipergunta5").value.toLowerCase();

        if (primeiraRespostaUsuario == respostasCorretas[pergunta] || segundaRespostaUsuario == respostasCorretas[pergunta] || terceiraRespostaUsuario == respostasCorretas[pergunta]
            || quartaRespostaUsuario == respostasCorretas[pergunta] || quintaRespostaUsuario == respostasCorretas[pergunta]) {
            pontuacao++;
        }
    }


    document.getElementById("iresultado").innerHTML = "Pontuação Final: " + pontuacao / 1;


}