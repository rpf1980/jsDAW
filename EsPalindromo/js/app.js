const idInput = document.getElementById('idInput');
const idDiv = document.getElementById('idDiv');

// Métodos aparte
function invierteString(cadena)
{
    let copia = "";

    for(i = cadena.length-1; i >= 0; i--)
    {
        copia = copia + cadena.charAt(i);
    }
    return copia;
}

function quitaAcentos(cadena)
{
    let copia = "";
    const con = "áàäéèëíìïóòöúùuñÁÀÄÉÈËÍÌÏÓÒÖÚÙÜÑçÇ";
    const sin = "aaaeeeiiiooouuunAAAEEEIIIOOOUUUNcC";

    for(i = 0; i < cadena.length; i++)
    {
        for(j = 0; j < con.length; j++)
        {
            if(cadena.charAt(i) === con.charAt(j))
            {
                copia = cadena.replace(cadena.charAt(i), sin.charAt(j));
            }
        }
    }
    return copia;
}

// Evento del input 
idInput.addEventListener('change', function(event)
{
    const str = event.target.value;

    let texto = quitaAcentos(str);

    let quitaEspacios = texto.replace(/ /g, '');

    let todoMinusculas = quitaEspacios.toLowerCase();

    let stringInvertido = invierteString(todoMinusculas);

    //Creamos un párrafo
    let p = document.createElement("p");

    if(todoMinusculas === stringInvertido)
    {
        p.textContent = "El cadena de texto es un palíndromo";
        idDiv.appendChild(p);
    }
    else
    {
        p.textContent = "La cadena de texto NO es un palíndromo";
        idDiv.appendChild(p);
    }
})
