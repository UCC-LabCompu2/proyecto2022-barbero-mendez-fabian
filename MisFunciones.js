
var auto1 = document.getElementById('Colores1');
var auto2 = document.getElementById('Colores2');

function IniciarPista(){
    var canvas = document.getElementById("miCanvas");
    var contexto = canvas.getContext("2d");

    var Pista = new Image();
    Pista.src = 'Imagenes/FondoPista.jpeg';

    contexto.drawImage(Pista, 175, 200);
    contexto.drawImage(Pista, 175, 0);
}