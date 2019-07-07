const idLetra = document.getElementById("idLetra");
const parrafo = document.getElementById("idTexto");
const idDivPrincipal = document.getElementById("idDivPrincipal");

// Guardamos texto del párrafo tal como se muestra en html 
const textoPalabra = parrafo.textContent;

// Guardamos texto completo de la palabra ( solución )
const textoSolucion = "E l e c t r o d o m e s t i c o";

// Pasamos a minúsculas los dos texto
const textMin = textoPalabra.toLowerCase();
const textMin2 = textoSolucion.toLowerCase();

// Hacemos split por los espacios a los dos string y los pasamos a array
const arrayTextoJuego = textMin.split(" ");
const arrayTextoSolucion = textMin2.split(" ");


idLetra.addEventListener('keypress', function (event) {
    // Valor de la letra que escribimos en el input
    const inputChar = event.target.value;

    // Entramos si pulsamos enter
    if (event.key === 'Enter') {

        // Tenemos que buscar sobre el arrayTextoSolucion tantos caracteres que coincidan 
        // con lo escrito en el input y cambiarlos por el guión en esa posición pero
        // del arrayTextoJuego ( y así ir colocando letras en su sitio )  
        if(arrayTextoSolucion.includes(inputChar)){

            const pos = arrayTextoSolucion.indexOf(inputChar);

        }

    }
})

// Funciones aparte
function arrayPosicionesCaracter(arrayOriginal, char)
{   // Con esta función pretendemos guardar todas las posiciones que
    // ocupan en el array el caracter que pasamos por parámetro

    let pos = -1;
    let arrayDePosiciones = new Array();

    for(i = 0; i < arrayOriginal.length; i++)
    {
        if(arrayOriginal[i] === char) // Si una de las posiciones del array es el caracter (será la primera que encuentre)
        {
            pos = arrayOriginal.indexOf(arrayOriginal[i]);  // Tomamos la posición del caracter ( caracter del array que coincide con el caracter que vamos buscando )
            arrayDePosiciones.push(pos); // Guardamos la posición en el array

            console.log(arrayDePosiciones);
            arrayOriginal.splice(pos,1,"x"); // En este punto debemos sustituir el caracter por otro ( ejemplo una x ) ya que indexOf solo devuelve la posición del primer caracter encontrado y queremos todas las posiciones por si hay más caracteres iguales

        }

        arrayPosicionesCaracter(arrayOriginal, char); // Llamada recursiva de la función para que siga hasta que acaben las interaciones del for
    }

    return arrayDePosiciones;
    
}