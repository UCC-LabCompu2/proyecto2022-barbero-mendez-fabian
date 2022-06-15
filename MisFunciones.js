/**
 * Imprimir en el canvas la pista al cargar la pagina
 * @method IniciarPista
 */

function IniciarPista(){
    var canvas = document.getElementById("miCanvas");
    var contexto = canvas.getContext("2d");

    var Pista = new Image();
    Pista.src = 'Imagenes/FondoPista.jpeg';

    contexto.drawImage(Pista, 255, 260);
    contexto.drawImage(Pista, 255, 0);
}

/**
 * Dibuja Los Autos de los colores especificos
 * @method DibujarAutos
 */
function DibujarAutos(){
    var canvas = document.getElementById("miCanvas");
    var contexto = canvas.getContext("2d");

    canvas.width = canvas.width;

    var Pista = new Image();
    Pista.src = 'Imagenes/FondoPista.jpeg';

    contexto.drawImage(Pista, 255, 260);
    contexto.drawImage(Pista, 255, 0);

    var auto1 = document.getElementById("Colores1");
    var auto2 = document.getElementById("Colores2");

    var HP1 = document.getElementById("HP1").value;
    var HP2 = document.getElementById("HP2").value;
    var Peso1 = document.getElementById("Peso1").value;
    var Peso2 = document.getElementById("Peso2").value;

    var AutoBlanco = new Image();
    AutoBlanco.src = "Imagenes/AutoBlanco.png";

    var AutoRojo = new Image();
    AutoRojo.src = "Imagenes/AutoRojo.png";

    var AutoAzul = new Image();
    AutoAzul.src = "Imagenes/AutoAzul.png";

    var AutoVerde = new Image();
    AutoVerde.src = "Imagenes/AutoVerde.png";

    if(auto1.selectedOptions[0].value === "blanco"){
        contexto.drawImage(AutoBlanco, 285, 600, 50, 100);
    }else if(auto1.selectedOptions[0].value === "azul"){
        contexto.drawImage(AutoAzul, 285, 600, 50, 100);
    }else if(auto1.selectedOptions[0].value === "verde"){
        contexto.drawImage(AutoVerde, 285, 600, 50, 100);
    }else if(auto1.selectedOptions[0].value === "rojo"){
        contexto.drawImage(AutoRojo, 285, 600, 50, 100);
    }

    if(auto2.selectedOptions[0].value === "blanco"){
        contexto.drawImage(AutoBlanco, 400, 600, 50, 100);
    }else if(auto2.selectedOptions[0].value === "azul"){
        contexto.drawImage(AutoAzul, 400, 600, 50, 100);
    }else if(auto2.selectedOptions[0].value === "verde"){
        contexto.drawImage(AutoVerde, 400, 600, 50, 100);
    }else if(auto2.selectedOptions[0].value === "rojo"){
        contexto.drawImage(AutoRojo, 400, 600, 50, 100);
    }
}

/**
 * Verifica Los inputs del formulario
 * @method VerificarFormulario
 */
function VerificarFormulario(){

    var HP1 = document.getElementById("HP1").value;
    var HP2 = document.getElementById("HP2").value;
    var Peso1 = document.getElementById("Peso1").value;
    var Peso2 = document.getElementById("Peso2").value;

    if(HP1 === "" || HP1 < 0){
        document.getElementById("HP1").value = 0;
        alert("Complete el formulario");
        return false;
    }

    if(HP2 === "" || HP2 < 0){
        document.getElementById("HP2").value = 0;
        alert("Complete el formulario");
        return false
    }

    if(Peso1 === "" || Peso1 <= 0){
        document.getElementById("Peso1").value = 800;
        alert("Complete el formulario");
        return false
    }

    if(Peso2 === "" || Peso2 <= 0){
        document.getElementById("Peso2").value = 800;
        alert("Complete el formulario");
        return false
    }
}