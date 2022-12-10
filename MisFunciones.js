/**
 * Dibuja Los Autos de los colores especificos
 * @method Carrera
 */
function DibujarAutos(){
    if(!VerificarFormulario()) return false;

    var canvas = document.getElementById("miCanvas");
    var contexto = canvas.getContext("2d");

    canvas.width = canvas.width;

    var auto1 = document.getElementById("Colores1");
    var auto2 = document.getElementById("Colores2");

    var AutoBlanco1 = new Image();
    var AutoBlanco2 = new Image();
    AutoBlanco1.src = "Imagenes/AutoBlanco.png";
    AutoBlanco2.src = "Imagenes/AutoBlanco.png";

    var AutoRojo1 = new Image();
    var AutoRojo2 = new Image();
    AutoRojo1.src = "Imagenes/AutoRojo.png";
    AutoRojo2.src = "Imagenes/AutoRojo.png";

    var AutoAzul1 = new Image();
    var AutoAzul2 = new Image();
    AutoAzul1.src = "Imagenes/AutoAzul.png";
    AutoAzul2.src = "Imagenes/AutoAzul.png";

    var AutoVerde1 = new Image();
    var AutoVerde2 = new Image();
    AutoVerde1.src = "Imagenes/AutoVerde.png";
    AutoVerde2.src = "Imagenes/AutoVerde.png";

    if(auto1.selectedOptions[0].value === "blanco"){
        AutoBlanco1.onload = function (){
            contexto.drawImage(AutoBlanco1, (canvas.width/2) - 140, 600, 80, 110);
        }
    }else if(auto1.selectedOptions[0].value === "azul"){
        AutoAzul1.onload = function () {
            contexto.drawImage(AutoAzul1, (canvas.width/2) - 140, 600, 80, 110);
        }
    }else if(auto1.selectedOptions[0].value === "verde"){
        AutoVerde1.onload = function (){
            contexto.drawImage(AutoVerde1, (canvas.width/2) - 140, 600, 80, 110);
        }
    }else if(auto1.selectedOptions[0].value === "rojo"){
        AutoRojo1.onload = function (){
            contexto.drawImage(AutoRojo1, (canvas.width/2) - 140, 600, 80, 110);
        }
    }

    if(auto2.selectedOptions[0].value === "blanco"){
        AutoBlanco2.onload = function (){
            contexto.drawImage(AutoBlanco2, (canvas.width/2) + 25, 600, 80, 110);
        }
    }else if(auto2.selectedOptions[0].value === "azul"){
        AutoAzul2.onload = function () {
            contexto.drawImage(AutoAzul2, (canvas.width /2) + 25, 600, 80, 110);
        }
    }else if(auto2.selectedOptions[0].value === "verde"){
        AutoVerde2.onload = function (){
            contexto.drawImage(AutoVerde2, (canvas.width/2) + 25, 600, 80, 110);
        }
    }else if(auto2.selectedOptions[0].value === "rojo"){
        AutoRojo2.onload = function (){
            contexto.drawImage(AutoRojo2, (canvas.width/2) + 25, 600, 80, 110);
        }
    }

    startInterval();
}

/**
 * Crea el intervalo de la animacion para los autos
 * @method StartInterval
 */
var IntervalID
function startInterval(){
    IntervalID = setInterval(AnimacionCarrera, 15);
}

/**
 * Detiene la animacion
 * @method StopInterval
 */
function stopInterval(){
    clearInterval(IntervalID);
}
/**
 * Verifica Los inputs del formulario
 * @method VerificarFormulario
 */
function VerificarFormulario(){
    var verificador = true;

    var HP1 = document.getElementById("HP1").value;
    var HP2 = document.getElementById("HP2").value;
    var Peso1 = document.getElementById("Peso1").value;
    var Peso2 = document.getElementById("Peso2").value;

    if(HP1 === "" || HP1 < 0){
        document.getElementById("HP1").value = 0;
        alert("El valor de HP del vehiculo 1 es incorrecto. porafavor ingreselo nuevamente. Gracais!");
        verificador = false;
    }

    if(HP2 === "" || HP2 < 0){
        document.getElementById("HP2").value = 0;
        alert("El valor de HP del vehiculo 2 es incorrecto. porafavor ingreselo nuevamente. Gracais!");
        verificador = false;
    }

    if(Peso1 === "" || Peso1 <= 0){
        document.getElementById("Peso1").value = 800;
        alert("El valor de Peso del vehiculo 1 es incorrecto. porafavor ingreselo nuevamente. Gracais!");
        verificador = false;
    }

    if(Peso2 === "" || Peso2 <= 0){
        document.getElementById("Peso2").value = 800;
        alert("El valor de Peso del vehiculo 2 es incorrecto. porafavor ingreselo nuevamente. Gracais!");
        verificador = false;
    }
    return verificador;
}


/**
 * Realiza la animacion de los autos
 * @method Carrera
 */
var x1 = 0;
var x2 = 0;
function AnimacionCarrera(IntervalID){
    var canvas = document.getElementById("miCanvas");
    var contexto = canvas.getContext("2d");

    canvas.width = canvas.width;

    var auto1 = document.getElementById("Colores1");
    var auto2 = document.getElementById("Colores2");

    var HP1 = document.getElementById("HP1").value;
    var HP2 = document.getElementById("HP2").value;
    var Peso1 = document.getElementById("Peso1").value;
    var Peso2 = document.getElementById("Peso2").value;

    var AutoBlanco1 = new Image();
    var AutoBlanco2 = new Image();
    AutoBlanco1.src = "Imagenes/AutoBlanco.png";
    AutoBlanco2.src = "Imagenes/AutoBlanco.png";

    var AutoRojo1 = new Image();
    var AutoRojo2 = new Image();
    AutoRojo1.src = "Imagenes/AutoRojo.png";
    AutoRojo2.src = "Imagenes/AutoRojo.png";

    var AutoAzul1 = new Image();
    var AutoAzul2 = new Image();
    AutoAzul1.src = "Imagenes/AutoAzul.png";
    AutoAzul2.src = "Imagenes/AutoAzul.png";

    var AutoVerde1 = new Image();
    var AutoVerde2 = new Image();
    AutoVerde1.src = "Imagenes/AutoVerde.png";
    AutoVerde2.src = "Imagenes/AutoVerde.png";

    if(auto1.selectedOptions[0].value === "blanco"){
        AutoBlanco1.onload = function (){
            contexto.drawImage(AutoBlanco1, (canvas.width/2) - 140, 600 - x1, 80, 110);
        }
        x1 += (HP1/Peso1)*10;
        if(x1 > canvas.height){
            alert("El vehiculo 1 gano la carrera");
            x1 = 0;
            x2 = 0;
            stopInterval();
        }
    }else if(auto1.selectedOptions[0].value === "azul"){
        AutoAzul1.onload = function () {
            contexto.drawImage(AutoAzul1, (canvas.width/2) - 140, 600, 80, 110);
        }
    }else if(auto1.selectedOptions[0].value === "verde"){
        AutoVerde1.onload = function (){
            contexto.drawImage(AutoVerde1, (canvas.width/2) - 140, 600, 80, 110);
        }
    }else if(auto1.selectedOptions[0].value === "rojo"){
        AutoRojo1.onload = function (){
            contexto.drawImage(AutoRojo1, (canvas.width/2) - 140, 600, 80, 110);
        }
    }

    if(auto2.selectedOptions[0].value === "blanco"){
        AutoBlanco2.onload = function (){
            contexto.drawImage(AutoBlanco2, (canvas.width/2) + 25, 600 - x2, 80, 110);
        }
        x2 += (HP2/Peso2)*10;
        if(x2 > canvas.height){
            alert("El vehiculo 2 gano la carrera");
        }
    }else if(auto2.selectedOptions[0].value === "azul"){
        AutoAzul2.onload = function () {
            contexto.drawImage(AutoAzul2, (canvas.width /2) + 25, 600, 80, 110);
        }
    }else if(auto2.selectedOptions[0].value === "verde"){
        AutoVerde2.onload = function (){
            contexto.drawImage(AutoVerde2, (canvas.width/2) + 25, 600, 80, 110);
        }
    }else if(auto2.selectedOptions[0].value === "rojo"){
        AutoRojo2.onload = function (){
            contexto.drawImage(AutoRojo2, (canvas.width/2) + 25, 600, 80, 110);
        }
    }
}