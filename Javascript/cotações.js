function verificar() {

    var pergunta1 = document.getElementById("ipergunta1").value.toLowerCase();

    if (pergunta1 == "") {

        alert("Escolha uma alternativa. ");
        console.log("entrou aventura");
    } else {
        if (pergunta1 == "aventura") {

            alert("Recomandamos a empresa: Jeri Viagens. Link a seguir. ");
            document.write(document.getElementById("iname").value + " <a href=' https://www.jeriviagens.com.br/'><h1><center>Jeri Viagens</center></h1></a>");
            console.log("entrou aventura");
        } else {
            if (pergunta1 == "família") {

                alert("Recomandamos consultar: o site portal jericoacoara. Link a seguir. ");
                document.write(document.getElementById("iname").value + " <a href=' https://www.jeriviagens.com.br/'><h1><center>Jeri Viagens</center></h1></a>");
                confirm.log("entrou família");
            } else {
                if (pergunta1 == "casal") {
                    alert("Recomendamos o site a seguir.");
                    document.write(document.getElementById("iname").value + " <a href=' https://www.melhoresdestinos.com.br/o-que-fazer-em-jericoacoara.html'><h1><center>Melhores destinos</center></h1></a>");
                    console.log("entrou casal");
                } else {
                    if (pergunta1 == "gastronomia") {
                        alert("Recomendamos o site a seguir.");
                        document.write(document.getElementById("iname").value + " <a href=' https://www.viajali.com.br/jericoacoara-restaurantes/'>  <h1><center>Viajali</center></h1></a>");
                        console.log("entrou gastronomia");

                    } else {
                        if (pergunta1 == "sossego") {
                            alert("Recomendamos o site a seguir.");
                            document.write(document.getElementById("iname").value + " <a href=' https://viagemeturismo.abril.com.br/atracao/praia-jericoacoara/'><h1><center>Viagem turismo</center></h1></a>");
                            console.log("entrou sossego");

                        } else {
                            if (pergunta1 == "balada") {
                                alert("Recomendamos o site a seguir.");
                                document.write(document.getElementById("iname").value + " <a href=' https://vidasemparedes.com.br/jericoacoara-praias-e-o-que-fazer/'> <h1><center>Vida sem paredes</center></h1> </a> ");
                                console.log("entrou balada");
                            }
                        }
                    }
                }

            }
        }
    }
    alert("Formulário enviado.");

}