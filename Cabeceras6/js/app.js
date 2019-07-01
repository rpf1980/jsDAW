// Seleccionamos el contenedor
const div = document.getElementById('cabeceras');

for(i = 1; i <= 6; i++)
{
    // Creamos el elemento padre
    const h = document.createElement("h" + i);

    //Creamos el elemento hijo
    const text = document.createElement("p");

    // Añadimos el contenido
    text.textContent = "Cabecera" + i;

    // Añadimos el elemento hijo al elemento padre
    h.appendChild(text);

    // Añadimos el elemento padre al contenedor
    div.appendChild(h);
}