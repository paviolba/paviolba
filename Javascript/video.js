let video = document.getElementsByClassName("video")[0];

function assistirVideo() {

    video.play();

}

function pausarVideo() {

    video.pause();

}

function pararVideo() {

    video.pause();
    video.currentTime = 0;

}

function retornar() {

    video.playbackRate -= 0.10;

}
function avançar() {

    video.playbackRate += 0.10;

}