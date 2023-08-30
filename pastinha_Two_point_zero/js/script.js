function adicao(a, b) {

    return a + b

}

function subtraocao(a, b) {

    return a - b;

}

function multiplicacao(a, b) {

    return a * b

}

function divisao(a, b) {

    if (a === 0 || b === 0) {

        return 0

    } else {

        return a / b

    }


}

function calular() {

    const n1 = parseFloat(document.getElementById("n1").value)
    const n2 = parseFloat(document.getElementById("n2").value)
    const operacoes = document.getElementById("operacoes").value
    let result;

    switch (operacoes) {

        case "adicao":
            result = adicao(n1, n2)
            break;

        case "subtracao":
            result = subtraocao(n1, n2)
            break;

        case "multiplicacao":
            result = multiplicacao(n1, n2)
            break;

        case "divisao":
            result = divisao(n1, n2)
            break;

    }

    document.getElementById("resultado").textContent = `O resultado da Operaçao é: ${result}`

}

//document.getElementById("calcular").addEventListener("click", calular)


function jornal(a) {
    let b = 10;

    return a * b

}

function revista(a) {
    let b = 20;

    return a * b

}

function livro(a) {
    let b = 30;
    return a * b

}

function disco(a) {
    let b = 40;

    return a * b

}


function Compra() {

    const n1 = document.getElementById("n1").value
    const loja = document.getElementById("loja").value
    let result;

    parseInt(n1)

    switch (loja) {

        case "jornal":

            result = jornal(n1)
            break;
        case "revista":
            result = revista(n1)
            break;
        case "livro":
            result = livro(n1);
            break;
        case "disco":
            result = disco(n1);
            break;



    }

    document.getElementById("resultado").innerText = `O total da compra é: ${result} `

}

document.getElementById("compra").addEventListener("click", Compra)