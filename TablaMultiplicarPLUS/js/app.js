const strNumber = document.getElementById("idInput");
const idTbody = document.getElementById("idTbody");


strNumber.addEventListener('keypress', function(event)
{
    if(event.key === 'Enter') {
        const valorInput = event.target.value;

    for(i = 1; i <= 10; i++)
    {
        // Creamos un tr
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");          // Creamos primer td
        td1.textContent = " " + valorInput + " x " + i ;   // Generamos contenido ( valor del input signo x y valor de i)
        tr.appendChild(td1);                               // Añadimos primer td al tr 

        const td2 = document.createElement("td");          // Creamos segundo td
        td2.textContent = " " + valorInput * i + " ";      // Generamos contenido (valor del input * i) 
        tr.appendChild(td2);                               // Añadimos segundo td al tr 

        //Añadimos el tr con sus td al idTbody
        idTbody.appendChild(tr);
    }
    }
})