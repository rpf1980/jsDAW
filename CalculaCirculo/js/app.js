// We associate nodes with their id's
idRadio = document.getElementById("idRadio");
idResult = document.getElementById("idResult");

idRadio.addEventListener('keypress', function(event){

    let radioValue = event.target.value;
    const pi = Math.PI;
    radioValue = radioValue * radioValue;
    let area = pi * radioValue;

    idResult.textContext = area;

    console.log(idResult.textContext);
});