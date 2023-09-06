export default class Produto{

    #nome
    #preco
    #codigoDeIdentificacao
    #quantidade

    constructor(nome,preco,codigoDeIdentificacao,quantidade){

        this.#nome = nome;
        this.#preco = preco;
        this.#codigoDeIdentificacao =codigoDeIdentificacao;
        this.#quantidade=quantidade;

    }


    get getNome(){

        return this.#nome

    }

    get getPreco(){

        return this.#preco

    }

    get getCodigoDeIdentificacao(){

        return this.#codigoDeIdentificacao

    }

    get getQuantidade(){

        return this.#quantidade

    }


    exibir(){

        console.log("Nome do Produto: "+this.#nome+
        " Preco do Produto: "+this.#preco+
        " Codigo de Identificação: "+this.#codigoDeIdentificacao+
        " Quantidade: "+this.#quantidade)

    }

}