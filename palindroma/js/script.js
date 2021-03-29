var parolaUtente = prompt('Inserisci la parola');
console.log(parolaUtente);

if ( resPalindromo == true ) {
    alert('la parola è palindroma');
} else {
    alert('la parola non è palindroma');
}


//funzione

palindromo(parolaUtente);

function palindromo(parolaAnalizzare) {
    console.log(parolaAnalizzare);
    var resPalindromo;
    resPalindromo = false;

    var parolaContrario = '';

    for ( var i = parolaAnalizzare.lenght - 1; i >= 0; i-- ) {
        var lettera = parolaAnalizzare[i];
        console.log(lettera);

        parolaContrario = parolaContrario + lettera;
    }
    console.log(parolaContrario);

    if ( parolaAnalizzare == parolaContrario ) {
        resPalindromo = true;
    }

    return resPalindromo;   
}

