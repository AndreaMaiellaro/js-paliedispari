var parolaUtente = prompt('Inserisci la parola');
console.log(parolaUtente);

palindroma(parolaUtente);

function palindroma(parolaUno) {
    var parolaAttuale = "";

    for (var j = parolaUno.lenght - 1; j >= 0; j--) {

        parolaAttuale = parolaAttuale + parolaUno[j];
    }
    console.log(parolaAttuale);

    return parolaUno;
}

