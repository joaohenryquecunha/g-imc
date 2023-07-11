function calcularIMC() {
    var peso = document.getElementById('pesoInput').value;
    var altura = document.getElementById('alturaInput').value;
    var pesoResultado = document.getElementById('pesoResultado');
    var resultadoElement = document.getElementById('resultado');
    var idosoRadioButton = document.getElementById('idoso');
    var adultoRadioButton = document.getElementById('adulto');

    if (idosoRadioButton.checked) {
        adultoRadioButton.checked = false;
    }

    if (adultoRadioButton.checked) {
        idosoRadioButton.checked = false;
    }

    if (peso && altura) {
        var imc = peso / (altura * altura);

        pesoResultado.innerHTML = "Seu peso é: " + peso + " kg" +
        "<br>Sua altura é: " + altura + " m" +
        "<br>Seu IMC é: " + imc.toFixed(2);

        if (idosoRadioButton.checked) {
            if (imc < 22) {
                resultadoElement.innerHTML = "(Abaixo do peso para idosos)";
            } else if (imc >= 22 && imc < 27) {
                resultadoElement.innerHTML = "(Peso normal para idosos)";
            } else if (imc >= 27 && imc < 30) {
                resultadoElement.innerHTML = "(Acima do peso para idosos)";
            } else if (imc >= 30) {
                resultadoElement.innerHTML = "(Obeso para idosos)";
            }
        } else if (adultoRadioButton.checked) {
            if (imc < 18.5) {
                resultadoElement.innerHTML = "(Abaixo do peso para adultos)";
            } else if (imc >= 18.5 && imc < 25) {
                resultadoElement.innerHTML = "(Peso normal para adultos)";
            } else if (imc >= 25 && imc < 30) {
                resultadoElement.innerHTML = "(Acima do peso para adultos)";
            } else if (imc >= 30) {
                resultadoElement.innerHTML = "(Obeso para adultos)";
            }
        } else {
            resultadoElement.innerHTML = "";
        }
    } else {
        resultadoElement.innerHTML = "Por favor, insira o peso e a altura.";
    }
}
