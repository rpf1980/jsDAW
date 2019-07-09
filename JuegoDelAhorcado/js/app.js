const divPrincipal = document.getElementById("divPrincipal");
const textoOculto = document.getElementById("idTexto");
const divBtn = document.getElementById("divBtn");
const idIntentos = document.getElementById("idIntentos");
const idMensaje = document.getElementById("idMensaje");

// Guardamos texto del párrafo tal como se muestra en html
const palabraOculta = textoOculto.textContent;

// Guardamos texto de la solución
const textoSolucion = "E l e c t r o d o m e s t i c o";

// Pasamos a minúsculas los dos textos
const textMin = palabraOculta.toLowerCase();
const textMin2 = textoSolucion.toLowerCase();

// Hacemos split por los espacios a los dos string y los pasamos a array
let arrayTextoOculto = textMin.split(" ");
const arrayTextoSolucion = textMin2.split(" ");

// Creamos los botones
const abecedario = "A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z";
const arrayABC = abecedario.toLowerCase().split(" ");

console.log(arrayABC);
let j = 0;

function addEventToButtons() {
    const buttons = document.querySelectorAll('button'); // Seleccionamos todos los botones
    let intentos = 0;

    console.log(buttons);

    buttons.forEach(function (button) {
        console.log(button);
        button.addEventListener('click', function (event) {

            const charBtn = event.target.id; // Recordemos que los id's de los botones corresponden al propio caracter que se busca

            // Comprobamos que el botón pulsado ( letra que sea ) está en nuestra palabra oculta
            if (arrayTextoSolucion.includes(charBtn) && intentos != 5) {
                const posicionesGuardadas = guardaPosicionesArray(arrayTextoSolucion, charBtn); // Posiciones del caracter sobre texto solución
                let ponLosChar = pintaCaracter(arrayTextoOculto, posicionesGuardadas, charBtn); // Sustituimos los guiones bajos por el caracter en las mismas posiciones pero en el array de la palabra oculta 
                ponLosChar = ponLosChar.join(" ");
                textoOculto.textContent = ponLosChar;

                
            } else {
                intentos++;

                idIntentos.textContent = parseInt(intentos);

                if (intentos >= 5 && intentos < ponLosChar.length) {

                    idMensaje.textContent = "Agotaste los 5 errores permitidos";
                }
                
            }

        });
    });

};

// Función que genera los botones del abecedario
function generaABC() {
    for (i = 0; i < 27; i++) {

        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = arrayABC[i];
        btn.id = arrayABC[i];
        divBtn.appendChild(btn);
    }
    addEventToButtons();
}

// Función que guarda las posiciones que hay en el array del caracter que busca
function guardaPosicionesArray(array, caracter) {

    const arrayPosiciones = [];
    let idx = array.indexOf(caracter);  // Primer caracter encontrado

    while (idx != -1) {  // Mientras que no de un -1 en la búsqueda del caracter

        arrayPosiciones.push(idx); // Vamos metiendo las posiciones en el arrayPosiciones
        idx = array.indexOf(caracter, idx + 1); // Y seguimos buscando en el array apartir de la posición anterior
    }

    return arrayPosiciones;
}

// Pinta caracteres en determinadas posiciones
function pintaCaracter(array, arrayPos, caracter) {
    // Nuestra ferencia será el array de posiciones
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < arrayPos.length; j++) {
            if (i == arrayPos[j]) {

                array.splice(i, 1, caracter); // Sobre la posición en array sustituye lo que tenga por el caracter que pasamos por parámetro
            }

        }

    }

    // Conviertimos a string para devolver
    return array; // Devolvemos el array con los cambios
}

// Inicio de la app
function inicio() {
    generaABC();
}

window.onload = inicio();
