const arrayColors = ["red", "green", "blue", "pink", "cyan"];


for (i = 0; i < 5; i++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Click here " + arrayColors[i];
    btn.id = arrayColors[i];
    document.body.appendChild(btn);
    document.write("<br/>");
    document.write("<br/>");
}

// Funciones para asignar colores a los párrafos
const buttons = document.querySelectorAll("button"); // querySelectorAll NOS selecciona todos los nodos del tipo button

buttons.forEach(function (button) {

    button.addEventListener('click', function (event) {
        const color = event.target.id;
        const p = document.createElement("p");
        p.textContent = "Curso de Grado Superior de Desarrollo de Aplicaciones Multiplataforma";
        p.style.color = color;
        document.body.appendChild(p);
    })
});

