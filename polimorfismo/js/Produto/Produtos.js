export default class Produtos {

    #listaProdutos

    constructor() {

        this.#listaProdutos = []

    }


    adicionarProduto(produto) {

        this.#listaProdutos.push(produto);

        document.getElementById("nome").value = "";
        document.getElementById("preco").value = "";
        document.getElementById("dataFabricacao").value = "";
        document.getElementById("dataValidade").value = "";

        document.getElementById("saida").innerText = `Produto adicionado com sucesso`

    }



    listarProdutos() {

        let listarProdutos = document.getElementById("listaProduto");

        for (let i = 0; i < this.#listaProdutos.length; i++) {

            let produto = this.#listaProdutos[i]
            let itemProduto = document.createElement("li")

            let produtoTexto = document.createTextNode(`${produto.toString()})

                itemProduto.appendChild(produtoTexto);

                listarProdutos.appendChild(itemProduto)




    }





}