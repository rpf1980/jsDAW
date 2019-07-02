const idInput = document.getElementById("idInput");
const idDiv = document.getElementById("idDiv");
const idBtnLimpiar = document.getElementById("idBtnLimpiar");


// Métodos aparte

function cadenaDelReves(cadena) {
    let copia = "";

    for (i = cadena.length - 1; i >= 0; i--) {
        copia = copia + cadena.charAt(i);
    }

    return copia;
}

idBtnLimpiar.addEventListener("click", function () {
    idInput.value = "";
    idDiv.innerText = "";
})

// Evento del idInput, Algoritmo principal
idInput.addEventListener("change", function (event) {

    // Tomamos el valor de lo escrito en el input
    const cadena = event.target.value;

    // Quitamos los espacios de la cadena
    let sinEspacios = cadena.replace(/ /g, '');

    // Lo pasamos todo a minúsculas
    let cadenaMinusculas = sinEspacios.toLowerCase();

    // La ponemos del revés
    const delReves = cadenaDelReves(cadenaMinusculas);

    // Creamos un párrafo
    const p = document.createElement("p");

    // Comparamos delReves con cadenaMinusculas y sinEspacios
    // son iguales será esPalindromo
    if (cadenaMinusculas == delReves) {

        p.textContent = "La cadena ES un PALÍNDROMO";
        return idDiv.appendChild(p);
    }
    else {
        p.textContent = "La cadena NO es un PALÍNDROMO";
        return idDiv.appendChild(p);
    }
})

