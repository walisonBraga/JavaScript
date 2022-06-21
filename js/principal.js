var titulo = document.querySelector("h2");
titulo.textContent = "Aparecida  Nutricionista";

var paciente = document.querySelector("#primeiro-paciente")

var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);

tdImc.textContent = imc;






//console.log(tdPeso); //tr
//console.log(paciente); //td que tem o peso
//console.log(tdAltura);// altura
//console.log(peso);// obter 100
