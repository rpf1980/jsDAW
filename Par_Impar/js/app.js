const idDiv = document.getElementById("idDiv");

//console.log(n);
function esPar(n)
{
    console.log(n);

    let respuesta = "";

    if(n %2 == 0)
    {
        respuesta = "El número es par";
    }
    else
    {
        respuesta = "El número es impar";
    }

    const p = document.createElement("p");
    p.textContent = respuesta;

    return idDiv.appendChild(p);
}


 
