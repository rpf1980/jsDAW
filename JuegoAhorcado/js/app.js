const idLetra = document.getElementById("idLetra");
const parrafo = document.getElementById("idTexto");

// Guardamos texto del párrafo tal como se muestra en html 
const textoPalabra = parrafo.textContent;

// Guardamos texto completo de la palabra ( solución )
const textoSolucion = "E l e c t r o d o m e s t i c o";

idLetra.addEventListener('keypress', function(event)
{
    const inputChar = event.target.value;

    if(event.key === 'Enter')
    {
        //Buscamos la letra que se escribe en el input sobre la cadena de texto (la palabra del juego)
        
        if(textoSolucion.includes("inputChar"))
        {
            const posLetra = textoSolucion.indexOf("inputChar");

            textoPalabra.replace(/_/gi, 'posLetra');

        }
    }
})

// Funciones aparte
function cuantasVecesCaracter(cadena, caracter)
{
    const veces = cadena.split(caracter).length-1;
    return veces;
}

function sustituyeCaracteres(cadena, viejo, nuevo)
{
    const copia = cadena;

    for(i = 0; i < copia.length; i++)
    {
        if(copia.charAt(i) === viejo)
        {
            
        }
    }
    return copia;
}