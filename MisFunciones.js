function IniciarPista(){
    var canvas = document.getElementById("miCanvas");
    var contexto = canvas.getContext("2d");

    var Pista = new Image();
    Pista.src = 'Imagenes/FondoPista.jpeg';

    contexto.drawImage(Pista, 0, 0);
}