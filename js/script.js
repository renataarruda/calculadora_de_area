function calcularTriangulo() {

    let base = document.getElementById("base__ret");
    let altura = document.getElementById("altura__ret");
    let calculo = (base.valueAsNumber * altura.valueAsNumber) / 2;
    let resultado = document.getElementById("resultado_tri");
    resultado.textContent = `A área é de ${calculo} m2.`
}

function calcularCirculo() {
    let raio = document.getElementById("raio");
    let calculo = 3.14 * Math.pow(raio.valueAsNumber, 2).toFixed(2);
    let resultado = document.getElementById("resultado_raio");
    resultado.textContent = `A área é de ${calculo} m2.`
}

function calcularQuadrado() {
    let lado = document.getElementById("lado");
    let calculo = Math.pow(lado.valueAsNumber, 2);
    let resultado = document.getElementById("resultado_qd");
    console.log(resultado)
    resultado.textContent = `A área é de ${calculo} m2.`;
}

function limparTriangulo() {
    document.getElementById("base__ret").value = '';
    document.getElementById("altura__ret").value = '';
    resultado_tri.textContent = '';
}

function limparCirculo() {
    document.getElementById("raio").value = '';
    resultado_raio.textContent = '';
}

function limparQuadrado() {
    document.getElementById('lado').value = '';
    resultado_qd.textContent = '';
}