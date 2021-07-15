var km = parseInt(prompt("Quanti km vuoi percorrere?"));
document.getElementById("km__finali").innerHTML = km;
var eta = parseInt(prompt("Qual è la tua età?"));
document.getElementById("eta__utente").innerHTML = eta;
var bigliettoMinori;
var biglietto65;




var prezzo = (km * 0.21).toFixed(2);


var scontoMinori = (prezzo * 0.2).toFixed(2);
bigliettoMinori = (prezzo - scontoMinori).toFixed(2);
var sconto65 = (prezzo * 0.4).toFixed(2);
biglietto65 = (prezzo - sconto65).toFixed(2);

if (eta < 18){
    document.getElementById("prezzo__biglietto").innerHTML = bigliettoMinori;
} else if (eta > 65) {
    document.getElementById("prezzo__biglietto").innerHTML = biglietto65;
} else {
    document.getElementById("prezzo__biglietto").innerHTML = prezzo;
}