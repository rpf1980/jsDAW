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

// Hacemos split por los espacios a los dos string
const arrayTextoJuego = textMin.split(" ");
const arrayTextoSolucion = textMin2.split(" ");

console.log(arrayTextoJuego);
console.log(arrayTextoSolucion);

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
{
    let contador = 0;

    for(i = 0; i < arrayOriginal.length; i++)
    {
        if(arrayOriginal[i] === char)
        {
            contador++;
        }
    }
    
}