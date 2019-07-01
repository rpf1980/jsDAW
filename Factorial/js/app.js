// Seleccionamos los contenedores necesarios
const idDiv = document.getElementById("idDiv");
const idInput = document.getElementById("idInput");


function factorial(n) {
    let factorial = 1;
    
    for(i = 1; i <= n; i++)
    {
        factorial = factorial * i;
    }
    return factorial;
}

idInput.addEventListener("change", function (event) {

    // Guardamos valor del input
    const value = event.target.value;
    
    // Creamos elemento p
    const p = document.createElement("p");

    let resultado = factorial(value);

    p.textContent = resultado;
    idDiv.appendChild(p);
})