let display = document.getElementById("idisplay");
let atualInput = "";
let operador = "";
let primeiroInput = "";

function adicionarNumero(number) {
    atualInput += number;
    display.value = atualInput;
}

function adicionarOperador(op) {
    operador = op;
    primeiroInput = atualInput;
    atualInput = "";
}

function limparDisplay() {
    display.value = "";
    atualInput = "";
    primeiroInput = "";
    operador = "";
}

function resultadoFinal() {
    let resultado;
    switch (operador) {
        case "+":
            resultado = parseFloat(primeiroInput) + parseFloat(atualInput);
            break;
        case "-":
            resultado = parseFloat(primeiroInput) - parseFloat(atualInput);
            break;
        case "*":
            resultado = parseFloat(primeiroInput) * parseFloat(atualInput);
            break;
        case "/":
            resultado = parseFloat(primeiroInput) / parseFloat(atualInput);
            break;
    }
    display.value = resultado;
    atualInput = resultado;
}
