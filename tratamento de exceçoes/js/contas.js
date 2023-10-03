function multiplica(a, b) {

    return a * b;

}

function adicao(a, b) {

    return a + b;

}

function subtracao(a, b) {

    if (a > b) {

        return (a - b)

    } else {

        return (b - a)

    }

}

function divisao(a, b) {

    return (a / b)

}

document.getElementById("calcular").addEventListener("click", function Operacoes() {

    let operacoes = document.getElementById("operacoes").value
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let Resultado;
    
    try {      
        
        if(isNaN(n1) || isNaN(n2)){

            throw ("Digite um numero valido")

        }

        if(operacoes == "divisao"){

            if(n1 === 0 || n2 === 0){

                return document.getElementById("Resposta").innerText = "Divisão por zero"

            }


        }
        
    } catch (e) {

        if(!(e instanceof Error)){

            e= new Error(e)

        }

      return document.getElementById("Resposta").innerText = e.message
       
        
    }




    switch (operacoes) {

        case "adicao":

            Resultado = adicao(n1, n2)

            document.getElementById("Resposta").innerText = "Resultado da soma: " + Resultado

            break

        case "subtracacao":

            Resultado = subtracao(n1, n2)

            document.getElementById("Resposta").innerText = "Resultado da subtração: " + Resultado

            break

        case "multiplicacao":

            Resultado = multiplica(n1, n2)

            document.getElementById("Resposta").innerText = "Resultado da multiplicação: " + Resultado

            break

        case "divisao":

            Resultado = divisao(n1, n2)

            document.getElementById("Resposta").innerText = "Resultado da divisão: " + Resultado

            break

    }



})
