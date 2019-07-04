const idLetra = document.getElementById("idLetra");
const parrafo = document.getElementById("idTexto");

// Guardamos texto del párrafo tal como se muestra en html 
const textoPalabra = parrafo.textContent;

// Guardamos texto completo de la palabra ( solución )
const textoSolucion = "E l e c t r o d o m e s t i c o";

idLetra.addEventListener('keypress', function (event) {
    const inputChar = event.target.value;

    if (event.key === 'Enter') {

        for (i = 0; i < textoPalabra.length; i++) {

            if (textoSolucion.includes("inputChar")) {

                const patron = /_/g;

                const nuevaCadena = textoPalabra.replace(patron, inputChar);
            }
        }
    }
})

// Funciones aparte
function cuantasVecesCaracter(cadena, caracter) {
    const veces = cadena.split(caracter).length - 1;
    return veces;
}

function sustituyeCaracteres() {
    
    
}