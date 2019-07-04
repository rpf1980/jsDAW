const strNumber = document.getElementById("idInput");
const idTbody = document.getElementById("idTbody");


strNumber.addEventListener('keypress', function(event)
{
    if(event.key === 'Enter') {
        const valorInput = event.target.value;

    for(i = 1; i <= 10; i++)
    {
        // Creamos un tr
        const tr = document.createElement("tr");           // Vamos creando los tr 

        const td1 = document.createElement("td");          // Creamos los td correspondientes a la primera celda de los tr
        td1.textContent = " " + valorInput + " x " + i ;   // Generamos los contenidos de los td ( valor del input signo x y valor de i)
        tr.appendChild(td1);                               // Los añadimos al tr 

        const td2 = document.createElement("td");          // Creamos los td correspondientes a la segunda celdad de los tr
        td2.textContent = " " + valorInput * i + " ";      // Generamos los contenidos de los td (valor del input * i) 
        tr.appendChild(td2);                               // Los añadimos al tr

        //Añadimos el tr con sus td al idTbody
        idTbody.appendChild(tr);                           // Por útlimo añadimos los tr al tbody
    }
    }
})