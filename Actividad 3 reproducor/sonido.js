const cargarSonido = function (fuente){
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto")
    return sonido;
};

const $botonReproducir = document.querySelector("#btnReproducir"),
    $botonPausar = document.querySelector("btnPausar");
    const sonido = cargarSonido("aida.mp3");

$botonReproducir.onclick = () => {
    sonido.play();
};

$botonPausar.onclick = () => {
    sonido.pause();
};