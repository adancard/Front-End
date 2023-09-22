import Produto from "./Produto.js";
import Produtos from "./Produtos.js";

let produtos = new Produtos();

document.getElementById("enviar").addEventListener("click", function adicionarProduto() {

    let nome = document.getElementById("nome").value;
    let preco = document.getElementById("preco").value;
    let dataFabricacao = new Date(document.getElementById("dataFabricacao").value).toLocaleDateString('en-GB');
    let dataValidade = new Date(document.getElementById("dataValidade").value).toLocaleDateString('en-GB');
 let dataHoje = new Date().toLocaleDateString('en-GB');

    if (nome === '' || preco === '') {

        alert("Insira algo para ser adicionado");


    } else {


       if(dataValidade > dataHoje){
      
       let naoVencido = "Dentro da Data de Validade"

          let produto = new Produto(nome, preco, dataFabricacao, dataValidade,naoVencido);

        produtos.adicionarProduto(produto);

        let lista = document.getElementById("listaProduto");
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild)

        }eles{

          let vencido = "Fora da Data de Validade"  

            let produto = new Produto(nome, preco, dataFabricacao, dataValidade,vencido);

        produtos.adicionarProduto(produto);

        let lista = document.getElementById("listaProduto");
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild)
        }





}



       }


  


    }

})


document.getElementById("listar").addEventListener("click", function listarProdutos() {

    produtos.listarProdutos()

    document.getElementById("saida").value = ""

})



