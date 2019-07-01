/**
 *   Número de palabras  
     Primera palabra y última palabra  
     Las palabras colocadas en orden inverso  
     Las palabras ordenadas de la a la z  
     Las palabras ordenadas de la z a la a 
 */

// Leemos la cadena del prompt
const leemos = prompt("Escribe texto");

// Generamos un array con el texto del prompt
const array = leemos.split(" ");
const arrayCopia = array;

//console.log(arrayCopia);

// Número de palabras 
const numeroPalabras = arrayCopia.length;

// Primera palabra y última palabra
document.write("Primera palabra: " + arrayCopia[0] + "<br>");
document.write("Última palabra: " + arrayCopia[arrayCopia.length-1] + "<br>");

// Las palabras colocadas en orden inverso
const arrayInvertido = arrayCopia.reverse();
document.write("Array invertido: " + arrayInvertido + "<br>");

// Las palabras ordenadas de la a la z

// Primero ponemos todas las palabras del array en minúsculas
const arrayEnMinusculas = new Array();
for(i = 0; i < array.length; i++)
{
    let trozo = array[i].toLowerCase();
    arrayEnMinusculas.push(trozo);
}

const arrayOrdenadoAz = arrayEnMinusculas.sort();
document.write("Array ordenado alfabéticamente: " + arrayOrdenadoAz + "<br>");

// Las palabras ordenadas de la z a la a
const arrayOrdenadoZa = arrayOrdenadoAz.reverse();
document.write("Las palabras ordenadas de la z a la a: " + arrayOrdenadoZa);

/* document.write(leemos + "<br>");
document.write(array); */
