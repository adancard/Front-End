export default class Produto {

    #nome
    #preco
    #dataFabricacao
    #dataValidade

    constructor(nome, preco, dataFabricacao, dataValidade) {

        this.#nome = nome;
        this.#preco = preco;
        this.#dataFabricacao = dataFabricacao;
        this.#dataValidade = dataValidade;

    }


    set setNome(nome) {

        this.#nome = nome;

    }

    get getNome() { return this.#nome }


    set setPreco(preco) {

        this.#preco = preco;

    }

    get getPreco() { return this.#preco }

    set setDataFabricacao(dataFabricacao) {

        this.#dataFabricacao = dataFabricacao;

    }

    get getDataFabricacao() { return this.#dataFabricacao }

    set setDataValidade(dataValidade) {

        this.#dataValidade = dataValidade;

    }

    get getNome() { return this.#dataValidade }



    toString() {

        `Nome do produto: ${this.#nome} 
        Preco: ${this.#preco}
        Data Fabricação: ${this.#dataFabricacao}
        Data de Validade: ${this.#dataValidade}`

    }

}