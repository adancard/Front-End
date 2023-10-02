
import Aluno from "./aluno";
import Turma from "./turma.js";

let turma = new Turma(prompt("digite o nome da Turma: "));

document.getElementById("adicionarAluno").addEventListener("click", function adicionarAluno() {


    let nome = document.getElementById("nome").value
    let dataNascimento = new Date(document.getElementById("dataNascimento").value)
    let nota = parseFloat(document.getElementById("nota").value)

    let aluno = new aluno(nome, dataNascimento, nota)


    turma.adicionarAluno(aluno)

});

function verificaSeEntradaFoiMarcada(entrada){

    if (entrada.checked) {

        return true

    } else {

        return false
    }

}

function validarEventoCliqueEmCaixaDeSelecao(entrada){

    entrada.addEventListener("change",function tratarMudancaDeSelecao(){
        atualizarestadoRemovedorItens();
    })

}

function atualizarestadoRemovedorItens(){

    let lista = document.getElementById("listaAlunos")
    let caixaDeSelecaoEntradas = lista.querySelector("input[type='checkbox']")
    let algumSelecionado = Array.from(caixaDeSelecaoEntradas).some(verificaSeEntradaFoiMarcada)
    let btnRemoverItens = document.getElementById("btnRemoverItens")

    if(algumSelecionado == true){

        btnRemoverItens.disable = false

    }else{

        btnRemoverItens.disable = true

    }


}

function listarAlunos(){

    let listaAlunos = document.getElementById("listaAluno")


    while(listaAlunos.firstChild){

        listaAlunos.removeChild(listaAlunos.firstChild)

    }

    turma.listarAlunos()

    let caixaDeSelecaoEntradas = listaAlunos.querySelectorAll("input[type='checkbox']")
    for(let i = 0; i < caixaDeSelecaoEntradas.length; i++){

        let entrada = caixaDeSelecaoEntradas[i]
        validarEventoCliqueEmCaixaDeSelecao(entrada)

    }

    atualizarestadoRemovedorItens()

}

function removerItens(){

    let listaAluno = document.getElementById("listaAluno")
    let caixaDeSelecaoEntradas = listaAluno.querySelectorAll("input[type='checkbox']:checked")

    let indicesSelecionados = [];

    for(let i = 0;i<caixaDeSelecaoEntradas.length; i++){

        indicesSelecionados.push(entrada.value)

    }

    turma.removerAluno(indicesSelecionados)

    listarAlunos()

}