function positivo(){

    let numero = document.getElementById("n1").value;

    if(numero > 0){

        document.getElementById("Resposta").innerText = "Positivo"

    }else if(numero < 0){

        document.getElementById("Resposta").innerText = "Negativo"

    }else{

        document.getElementById("Resposta").innerText = "Igual a Zero"

    }

}

function SelecionaM(){

    let Mes = document.getElementById("Mes")
    let i = Mes.selectedIndex;
    let mes_selecionado = Mes.options[i].value

    document.getElementById("Resposta").innerText = mes_selecionado

}

function Notas(){

    let n1 = parseInt(document.getElementById("n1")).value
    let n2 = parseInt(document.getElementById("n2")).value
    let n3 = parseInt(document.getElementById("n3")).value

    let soma;

    soma = (n1+n2+n3)/3

    document.getElementById("Resposta").innerText = soma

}