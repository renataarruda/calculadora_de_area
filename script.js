
function selecionarOpcoes() {
    var selectElement = document.getElementById("select");
    var opcoesSelecionadasElement = document.getElementById("opcoes_selecionadas");
    var opcaoSelecionadaElement = document.getElementById("opcao_selecionada");

    if (selectElement.value !== "") {
        opcoesSelecionadasElement.style.display = "block";
        opcaoSelecionadaElement.value = selectElement.options[selectElement.selectedIndex].text;
    } else {
        opcoesSelecionadasElement.style.display = "none";
        opcaoSelecionadaElement.value = "";
    }

}

function calcular() {
    var selectElement = document.getElementById("select");
    var resultadoElement = document.getElementById("resultado");
    var opcaoSelecionada = selectElement.value;

    if (opcaoSelecionada === "triangulo_retangulo") {
        var resultado = calcularTriangulo();
        resultadoElement.innerText = resultado;
    } else {
        resultadoElement.innerText = `Opção inválida`
    }
    
    if (opcaoSelecionada === "circulo") {
        var resultado = calcularCirculo();
        resultadoElement.innerText = resultado;
    } else {
        resultadoElement.innerText = `Opção inválida`
    }
    
    
   if (opcaoSelecionada === "quadrado") {
        var resultado = calcularQuadrado();
        resultadoElement.innerText = resultado;
    } else {
        resultadoElement.innerText = `Opção inválida`
    }
}

function calcularTriangulo() {

    let base = document.getElementById("base__ret");
    let altura = document.getElementById("altura__ret");
    let calculo = (base.valueAsNumber * altura.valueAsNumber) / 2;
    let resultado = document.getElementById("resultado");
    return resultado.textContent = `O resultado é ${calculo} m2.`
}

function calcularQuadrado() {
    let lado = document.getElementById("lado");
    let calculo = Math.pow(lado.valueAsNumber, 2);
    let resultado = document.getElementById("resultado");
    console.log(resultado)
    return resultado.textContent = `O resultado é ${calculo} m2.`
}

function calcularCirculo() {
    let raio = document.getElementById("raio");
    let calculo = 3.14 * Math.pow(raio.valueAsNumber, 2).toFixed(2);
    let resultado = document.getElementById("resultado");
    return resultado.textContent = `O resultado é ${calculo} m2.`
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