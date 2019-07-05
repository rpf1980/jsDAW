const idLetra = document.getElementById("idLetra");
const parrafo = document.getElementById("idTexto");
const idDivPrincipal = document.getElementById("idDivPrincipal");

// Guardamos texto del párrafo tal como se muestra en html 
const textoPalabra = parrafo.textContent;

// Guardamos texto completo de la palabra ( solución )
const textoSolucion = "E l e c t r o d o m e s t i c o";

idLetra.addEventListener('keypress', function (event) {
    const inputChar = event.target.value;
    let cadenaNueva = "";
    

    if (event.key === 'Enter') {

        if (textoSolucion.includes(inputChar)) {

            cadenaNueva = sustituyeCaracteres(textoPalabra, /_/gi, inputChar);
            parrafo.textContent = cadenaNueva; // Reseteamos el párrafo con los cambios ( contiene la palabra oculta del juego )
        }
    }
})

// Funciones aparte
function cuantasVecesCaracter(cadena, caracter) {
    const veces = cadena.split(caracter).length - 1;
    return veces;
}

function sustituyeCaracteres(cadena, patron, caracter) {
    
    let nuevaCadena = cadena.replace(patron, caracter);

    return nuevaCadena;
    
}

function guardaPosicionesCaracter(cadena, caracter)
{
    let arrayPosiciones = [];
    let cadenaNueva = "";

    for(i = 0; i < cadena.length; i++)
    {
        if(cadena.charAt(i) == caracter)
        {
            let pos = cadena.indexOf(charAt(i));  // Guardamos posición del caracter que buscamos
            arrayPosiciones.add(i); // Guardamos esa posición en arrayPosiciones
            cadenaNueva = sustituyeCaracteres(cadena, /caracter/g, "x");
        }

        guardaPosicionesCaracter(cadena, caracter);
    }

    return arrayPosiciones;
}