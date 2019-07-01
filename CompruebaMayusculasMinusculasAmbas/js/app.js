// Capturamos lo que escribe el usuario
const texto = prompt("Escribe una frase");

// Creamos un nodo
const p = document.createElement("p");
const p2 = document.createElement("p");

// Añadimos texto del prompt al nodo creado
p.textContent = texto;

// Seleccionamos el contenedor
const idDiv = document.getElementById("idDiv");

// Añadimos el párrafo con su texto al div-resultado
//idDiv.appendChild(p);

// Quitamos los espacios a la cadena de texto
const sinEspacios = texto.replace(/ /g,''); 


// Función que devuelve true si la cadena está compuesta enteramente por MAYÚSCULAS 
function mayusculasAll(sinEspacios)
{
    if (sinEspacios.match(/^[A-Z]*$/)) {
        return true;
    } else {
        return false;
    }
}

// Función que devuelve true si la cadena está compuesta enteramente por MINÚSCULAS
function minusculasAll(sinEspacios)
{
    if (sinEspacios.match(/^[a-z]*$/)) {
        return true;
    } else {
        return false;
    }
}

if(mayusculasAll(sinEspacios))
{
    p2.textContent = "La cadena tan solo contiene mayúsculas";
    idDiv.appendChild(p2);
}
else if(minusculasAll(sinEspacios))
{
    p2.textContent = "La cadena tan solo contiene minúsculas";
    idDiv.appendChild(p2);
}
else
{
    p2.textContent = "La cadena está compuesta tanto de mayúsculas como minúsculas";
    idDiv.appendChild(p2);
}

