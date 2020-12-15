var element = document.getElementById("genera");
element.addEventListener('click',
function() {

  var nome = document.getElementById('nome').value;
  console.log(nome);
  var km = document.getElementById('km').value;
  console.log(km);
  var eta = document.getElementById('eta').value;
  console.log(eta);

  var costo = km * 0.21;
  var message = 'Tariffa Standard';

  if (eta == 'minorenne') {
    costo -= costo * 0.2;
    message = "Sconto minorenne";
  } else if (eta == 'anziano') {
    costo -= costo * 0.4;
    message = "Sconto anziano";
  }

  document.getElementById('nominativo').innerHTML = nome;

  document.getElementById('offerta').innerHTML = message;
  var carrozza = Math.floor(Math.random()*9) +1;
  document.getElementById('carrozza').innerHTML = carrozza;
  var min = 80000;
  var max = 100000;
  var codice = Math.floor(Math.random() * (max - min + 1) ) + min;
  document.getElementById('codice').innerHTML = codice;
  document.getElementById('costo').innerHTML = costo.toFixed(2) + " €";

}
);