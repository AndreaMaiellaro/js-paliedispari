var sceltaUtente = prompt('Scegli pari o dispari');
console.log(sceltaUtente);

var numUtente = parseInt( prompt('Inserisci un numero tra 1 e 5') );
console.log(numUtente);

function numPc() {
    var numeroCasualePC = Math.floor(Math.random() * 5) +1;
    return numeroCasualePC;
}

var numeroCasualePC = numPc();
console.log(numeroCasualePC);

function sommaNum( num1, num2 ) {
    var risultato = num1 + num2 ;
    return risultato;
}

var somma = sommaNum(numUtente, numeroCasualePC);
console.log(somma);

if (somma % 2 == 0) {
    if (sceltaUtente == 'pari') {
        alert('hai vinto');
    } else {
        alert('hai perso');
    }   
} else {
    if (sceltaUtente == 'dispari') {
        alert('hai vinto');
    } else {
        alert('hai perso');
    }
    
}