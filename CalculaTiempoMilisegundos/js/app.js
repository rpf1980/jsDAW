// We associate nodes with id's
const idDateNow = document.getElementById("idDateNow"); // Current date
const idFutureDate = document.getElementById("idFutureDate"); // Year-end date
const idMessage = document.getElementById("idMessage"); // Result in milliseconds

// Time instances
const dateNow = new Date(); // Current date
const millsecondsNow = dateNow.getTime(); // Milliseconds of current date
const futureDate = new Date(2019, 12, 31); // Year-end date
const millsecondFut = futureDate.getTime(); // Milliseconds of the end date


// Results
const result = millsecondFut - millsecondsNow; 

idDateNow.textContent = dateNow;
idFutureDate.textContent = futureDate;
idMessage.textContent = result + " ms";




