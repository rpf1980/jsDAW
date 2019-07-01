const idNumber = document.getElementById("idNumber");
const idResultado = document.getElementById("idResultado");

idNumber.addEventListener("change", function()
{
    const n = idNumber.value;

    for(i = 1; i <= 10; i++)
    {
        idResultado.innerHTML += "<div>" + n + " x " + i + " = " + (n*i) + "</div>";
    } 
})