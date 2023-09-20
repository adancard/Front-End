import Produto from "./Produto.js";


document.getElementById("enviar").addEventListener("click", function produto() {

    let produto = new Produto();
    let nome = document.getElementById("nome").value;
    let preco = document.getElementById("preco").value;
    let dataFabricacao = new Date(document.getElementById("dataFabricacao").value);
    let dataValidade = new Date(document.getElementById("dataValidade").value);
    let data = new Date();

    produto.setPreco = preco;
    produto.setNome = nome;

    console.log(nome);
    console.log(produto.getNome)

    if(dataValidade < data){

        document.getElementById("saida").innerText = `Nome do produto: ${nome}, Preco: ${produto.getPreco}, Data Fabricação: ${dataFabricacao}, Data de Validade: ${dataValidade}, Produto Vencido`

    }else{

        document.getElementById("saida").innerText = `Nome do produto: ${nome}, Preco: ${produto.getPreco}, Data Fabricação: ${dataFabricacao},Data de Validade: ${dataValidade}, Dentro da Validade`

    }


})