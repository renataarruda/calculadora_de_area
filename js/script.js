
function calcularTriangulo() {

    let base = document.getElementById("base__ret");
    let altura = document.getElementById("altura__ret");
    let calculo = (base.valueAsNumber * altura.valueAsNumber) / 2;
    let resultado = document.getElementById("resultado");
    resultado.textContent = `O resultado é ${calculo} m2.`
}

function calcularQuadrado() {
    let lado = document.getElementById("lado");
    let calculo = Math.pow(lado.valueAsNumber, 2);
    let resultado = document.getElementById("resultado");
    console.log(resultado)
    resultado.textContent = `O resultado é ${calculo} m2.`
}

function calcularCirculo() {
    let raio = document.getElementById("raio");
    let calculo = 3.14 * Math.pow(raio.valueAsNumber, 2).toFixed(2);
    let resultado = document.getElementById("resultado");
    resultado.textContent = `O resultado é ${calculo} m2.`
}

function limpar() {

    if (calcularTriangulo()) {
        document.getElementById("base__ret").value = '';
        document.getElementById("altura__ret").value = '';
        resultado.textContent = '';
    }

    if (calcularCirculo()) {
        document.getElementById("raio").value = '';
        resultado.textContent = '';
    }

    if (calcularQuadrado) {
        document.getElementById('lado').value = '';
        resultado.textContent = '';
    }

}