const idDiv = document.getElementById("idDiv");

const letras = "T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E";

function letraDNI(n)
{
    // Sacamos el resto que nos da número DNI / 23
    const resto = n % 23;

    console.log(resto);

}