var km = parseInt(prompt("Quanti km vuoi percorrere?"));
var eta = parseInt(prompt("Qual è la tua età?"));
var bigliettoMinori;
var biglietto65;

var prezzo = (km * 0.21).toFixed(2);
console.log(prezzo)

var scontoMinori = (prezzo * 0.2).toFixed(2);
var sconto65 = (prezzo * 0.4).toFixed(2);

if (eta < 18){
     bigliettoMinori = (prezzo - scontoMinori).toFixed(2);
    alert(bigliettoMinori);
} else if (eta > 65) {
     biglietto65 = (prezzo - sconto65).toFixed(2);
    alert(biglietto65)
} else {
    alert(prezzo)
}