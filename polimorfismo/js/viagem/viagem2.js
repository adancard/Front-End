import Viagem from "./Viagem.js";

document.getElementById("enviar").addEventListener("click",function viagem(){

    const destino = document.getElementById('destino').value;
    const dataPartida = document.getElementById('dataPartida').value
    const dataRetorno = document.getElementById('dataRetorno').value
    const orcamento = parseFloat(document.getElementById('orcamento').value)

    const viagem = new Viagem(destino,dataPartida,dataRetorno,orcamento)

    const precoPassagem = parseFloat(prompt('Digite o preço estimado da passagem: '))
    const precoHospedagem = parseFloat(prompt('Digite o preço estimado da hospedagem: '))
    const precoAlimentacao = parseFloat(prompt('Digite o preço estimado da alimentação: '))
    
    document.getElementById('saida').innerText = viagem.exibirDetalhesViagem(precoAlimentacao,precoHospedagem,precoPassagem);

})