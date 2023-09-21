import Produto from "./Produto.js";
import Produtos from "./Produtos.js";

let produtos = new Produtos();

document.getElementById("enviar").addEventListener("click", function adicionarProduto() {

    let nome = document.getElementById("nome").value;
    let preco = document.getElementById("preco").value;
    let dataFabricacao = new Date(document.getElementById("dataFabricacao").value).toLocaleDateString('en-GB');
    let dataValidade = new Date(document.getElementById("dataValidade").value).toLocaleDateString('en-GB');

    if (nome === '' || preco === '') {

        alert("Insira algo para ser adicionado");


    } else {


        let produto = new Produto(nome, preco, dataFabricacao, dataValidade);

        produtos.adicionarProduto(produto);

        let lista = document.getElementById("listaProduto");
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild)
        }


    }

})


document.getElementById("listar").addEventListener("click", function listarProdutos() {

    produtos.listarProdutos()

    document.getElementById("saida").value = ""

})



