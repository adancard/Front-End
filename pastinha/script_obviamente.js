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
