var titulo = document.querySelector("h2");
titulo.textContent = "Aparecida  Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValido = true

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválido!");
        alturaEhValido = false;
        tdImc.textContent = "Altura inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValido && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

//console.log(tdPeso); //tr
//console.log(paciente); //td que tem o peso
//console.log(tdAltura);// altura
//console.log(peso);// obter 100
