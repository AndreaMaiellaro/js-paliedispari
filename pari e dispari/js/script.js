var sceltaUtente = prompt('Scegli pari o dispari');
console.log(sceltaUtente);

var numUtente = prompt('Inserisci un numero tra 1 e 5');
console.log(numUtente);
numUtente = parseInt(numUtente);

numPc();

function numPc( numeroCasualePC ) {
    var numeroCasualePC = parseInt(numeroCasualePC)
    numeroCasualePC = Math.floor(Math.random() * 5) +1;
    return numeroCasualePC;
}

var numeroCasualePC = numPc();
console.log(numeroCasualePC);

sommaNum();
var risultato;

function sommaNum( numUtente, numeroCasualePC ) {
    var risultato = numUtente + numeroCasualePC ;
    return risultato;
}

var somma = sommaNum();
console.log(somma);
console.log(risultato);

// while ( sceltaUtente = 'pari' ) {

// }

// if (risultato % 2 == 0) {
//     var pari = true
//     alert('hai vinto')
// } else {
    
// }