function positivo() {

    let numero = document.getElementById("n1").value;

    if (numero > 0) {

        document.getElementById("Resposta").innerText = "Positivo"

    } else if (numero < 0) {

        document.getElementById("Resposta").innerText = "Negativo"

    } else {

        document.getElementById("Resposta").innerText = "Igual a Zero"

    }

}

function SelecionaM() {

    let Mes = document.getElementById("Mes")
    let i = Mes.selectedIndex;
    let mes_selecionado = Mes.options[i].value

    document.getElementById("Resposta").innerText = mes_selecionado

}

function Notas() {

    let n1 = parseFloat(document.getElementById("n1").value)

    let n2 = parseFloat(document.getElementById("n2").value)

    let n3 = parseFloat(document.getElementById("n3").value)

    let soma;

    soma = (n1 + n2 + n3) / 3;

    document.getElementById("Resposta").innerText = soma

}

function Comparar() {

    let n1 = parseInt(document.getElementById("n1").value)

    let n2 = parseInt(document.getElementById("n2").value)

    if (n1 == n2) {

        document.getElementById("Resposta").innerText = "Os Dois Numeros são iguais"

    } else {

        document.getElementById("Resposta").innerText = "Os Dois Numeros são diferentes"

    }

    if (n1 === n2) {

        document.getElementById("Resposta").innerText = "Os Dois Numeros sao Estritamente iguais"

    } else {

        document.getElementById("Resposta").innerText = "Os Dois Numeros sao Estritamente Diferentes"

    }


}


function Calcular() {

    let n1 = parseFloat(document.getElementById("n1").value)
    let n2 = parseFloat(document.getElementById("n2").value)
    let n3 = parseFloat(document.getElementById("n3").value)

    if (n1 == n2 && n1 == n3 && n2 == n1 && n2 == n3 && n3 == n1 && n3 == n2) {

        document.getElementById("Resposta").innerText = "Triangulo Equilátero"

    } else if (n1 != n2 && n1 != n3 && n2 != n1 && n2 != n3 && n3 != n1 && n3 != n2) {

        document.getElementById("Resposta").innerText = "Triangulo Escaleno"

    } else {

        document.getElementById("Resposta").innerText = "Triangulho Isosceles"

    }


}

function Somar() {

    let n1

    let soma = 0

    do {

        n1 = parseInt(prompt("Digite o numero -1 para sair"))

        soma += n1;

    } while (n1 != -1)

    document.getElementById("Resposta").innerText = soma + 1

}

function Pares() {

    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)

    if (n1 > n2) {

        for (let cont = n2; cont <= n1; cont++) {
            if (cont % 2 == 0) {

                alert("Par")

            }

            else {


                alert("Impar")


            }


            alert(cont)


        }

    }

    else {

        for (let cont = n1; cont <= n2; cont++) {

            if (cont % 2 == 0) {

                alert("Par")

            }
            else {

                alert("Impar")

            }

            alert(cont)

        }


    }


}

function Primos() {

    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)

    if (n1 > n2) {

        for (let cont = n2; cont <= n1; cont++) {

            if (cont % 2 == 0 || cont == 2) {

                document.getElementById("Resposta").innerText = cont
                console.log(cont)

            }

        }

    }

    else {

        for (let cont = n1; cont <= n2; cont++) {

            if (cont % 2 == 0 || cont == 2) {

                document.getElementById("Resposta").innerText = cont

            }

        }

    }

}

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

    if (a == 0 || b == 0) {

        return document.getElementById("Resposta").innerText = "Divisão por zero"


    }
    else {

        return (a / b)

    }


}

function Operacoes() {

    let opcao = parseInt(document.getElementById("opcao").value)
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let Resultado;

    parseInt(n1)
    parseInt(n2)

    switch (opcao) {

        case 1:

            Resultado = adicao(n1, n2)

            document.getElementById("Resposta").innerText = "Resultado da soma: " + Resultado

            break

        case 2:

            Resultado = subtracao(n1, n2)

            document.getElementById("Resposta").innerText = "Resultado da subtração: " + Resultado

            break

        case 3:

            Resultado = multiplica(n1, n2)

            document.getElementById("Resposta").innerText = "Resultado da multiplicação: " + Resultado

            break

        case 4:

            Resultado = divisao(n1, n2)

            document.getElementById("Resposta").innerText = "Resultado da divisão: " + Resultado

            break

        default:

            document.getElementById("Resposta").innerText = "Opção invalida"
            break

    }



}


function raiz(a) {

    return Math.sqrt(a)

}

function exponencial(a) {

    return Math.pow(a, a)

}

function Operacoes1() {

    let n1 = parseInt(document.getElementById("n1").value)
    let opcao = parseInt(document.getElementById("opcao").value)
    let Resultado


    switch (opcao) {

        case 1:

             Resultado = raiz(n1)

            document.getElementById("Resposta").innerText = "A raiz é: " + Resultado
            break

        case 2:

            Resultado = exponencial(n1)

            document.getElementById("Resposta").innerText = "O exponencial é: " + Resultado
            break


    }


}


function reverseNum(n1){

   var n1 = parseInt(prompt("Qual o numero?"))

   var resultado = 0;
   
    while (n1 > 0) {
        resultado = 10 * resultado + n1 % 10;
        n1 = Math.floor(n1 / 10);
    }

    alert("O resultado da inversão é: "+resultado)
  
}

