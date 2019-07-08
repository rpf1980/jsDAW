const divPrincipal = document.getElementById("divPrincipal");
const textoOculto = document.getElementById("idTexto");
const divBtn = document.getElementById("divBtn");

// Guardamos texto del párrafo tal como se muestra en html
const palabraOculta = textoOculto.textContent;

// Guardamos texto de la solución
const textoSolucion = "E l e c t r o d o m e s t i c o";

// Pasamos a minúsculas los dos textos
const textMin = palabraOculta.toLowerCase();
const textMin2 = textoSolucion.toLowerCase();

// Hacemos split por los espacios a los dos string y los pasamos a array
const arrayTextoOculto = textMin.split(" ");
const arrayTextoSolucion = textMin2.split(" ");

// Creamos los botones
const abecedario = "A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z";
const arrayABC = abecedario.split(" ");
let j = 0;

function generaABC() {
    for (i = 0; i < 27; i++) {

        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = arrayABC[i];
        btn.id = arrayABC[i].toLowerCase();
        divBtn.appendChild(btn);
    }
}

window.onload = generaABC();
