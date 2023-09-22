import Viagem from "./Viagem.js"

let viagem = new Viagem();

document.getElementById("enviar").addEventListener("click", function saidinha(){

    let destino = document.getElementById("destino").value;
    let dataPartida = new Date(document.getElementById("dataPartida").value).toLocaleDateString('en-GB');
    let dataRetorno = new Date(document.getElementById("dataRetorno").value).toLocaleDateString('en-GB');
    let orcamento = document.getElementById("orcamento").value


    viagem.setDestino=destino;
    viagem.setDataPartida=dataPartida;
    viagem.setDataRetorno=dataRetorno;
    viagem.setOrcamento=orcamento;

    document.getElementById("saida").innerText = `${viagem.exibirDetalhesViagem()}`



})
