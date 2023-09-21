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
        let dataHoje = new Date().toLocaleDateString('en-GB');

        for (let i = 0; i < this.#listaProdutos.length; i++) {

            let produto = this.#listaProdutos[i]
            let itemProduto = document.createElement("li")

            if (document.getElementById("dataValidade").value  < dataHoje) {

                let produtoTexto = document.createTextNode(`${produto.toString()}, Produto na Validade`)

                itemProduto.appendChild(produtoTexto);

                listarProdutos.appendChild(itemProduto)


            } 
            if (document.getElementById("dataValidade").value  > dataHoje) {


                let produtoTexto = document.createTextNode(`${produto.toString()} Produto Vencido`)

                itemProduto.appendChild(produtoTexto);

                listarProdutos.appendChild(itemProduto)


            }



        }



    }





}