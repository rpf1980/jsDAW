const arrayColors = ["red", "green", "blue", "pink", "cyan"];


for(i = 0; i < 5; i++)
{
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Click here " + arrayColors[i];
    btn.id = arrayColors[i];
    document.body.appendChild(btn);
    document.write("<br/>");
    document.write("<br/>");
}

// Funciones para asignar colores a los párrafos
const btnRed = document.getElementById("red");
const btnGreen = document.getElementById("green");
const btnBlue = document.getElementById("blue");
const btnPink = document.getElementById("pink");
const btnCyan = document.getElementById("cyan");

btnRed.addEventListener('click', function()
{
    const p = document.createElement("p");
    p.textContentn = "Curso de Grado Superior de Desarrollo de Aplicaciones Multiplataforma";
    p.style.color = "red";
})

