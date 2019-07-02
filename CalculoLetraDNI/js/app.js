const idDiv = document.getElementById("idDiv");
const idBtnLimpiar = document.getElementById("idBtnLimpiar");

const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
const array = Array.from(letras);

function letraDNI(n)
{
    // Sacamos el resto que nos da número DNI / 23
    const resto = n % 23;

    // Con la posición = resto sacamos la letra correpondiente del DNI
    const resultado = array[resto];

    idDiv.innerHTML += "Nuestra letra es la " + resultado;
}

idBtnLimpiar.addEventListener("click", function()
{
    idDiv.innerHTML = "";
})




