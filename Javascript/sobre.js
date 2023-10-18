let audio = document.getElementsByClassName("audio")[0];

function assistirAudio() {

    audio.play();

}

function pausarAudio() {

    audio.pause();

}

function pararAudio() {

    audio.pause();
    audio.currentTime = 0;

}

function retornar() {

    audio.playbackRate -= 0.10;

}
function avançar() {

    audio.playbackRate += 0.10;

}



function verificar() {

    var pergunta1 = document.getElementById("ipergunta1").value.toLowerCase();

    if (pergunta1 == "") {

        alert("Escolha uma alternativa. ");
        console.log("");
    } else {
        if (pergunta1 == "estadia") {

            alert("Recomandamos o Link a seguir para melhores informações. ");
            document.write("<a href=' https://www.youtube.com/watch?v=KCfUknVMYcQ'><h1><center>Acomodações em Jericoacoara</center></h1></a>");
            console.log("entrou estadia");
        } else {
            if (pergunta1 == "conforto") {

                alert("Recomandamos consultar o hotel Essenza. Assista o vídeo a seguir.");
                document.write("<a href=' https://www.youtube.com/watch?v=1TdX8G4P6OA'><h1><center>Hotel Essenza</center></h1></a>");
                confirm.log("entrou conforto");
            } else {
                if (pergunta1 == "aventura") {
                    alert("Recomendamos o site a seguir.");
                    document.write("<a href=' https://www.youtube.com/watch?v=Te8xDMbr0R0'><h1><center>Passeios com emoção</center></h1></a>");
                    console.log("entrou aventura");
                } else {
                    if (pergunta1 == "luademel") {
                        alert("Recomendamos o site a seguir.");
                        document.write("<a href=' https://www.youtube.com/watch?v=R_-48SZkLFU'><h1><center>Passeios românticos</center></h1></a>");
                        console.log("entrou lua de mel");

                    }
                }

            }
        }
    }
    console.log("Formulário enviado.");

}
