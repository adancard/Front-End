export default class Produto {

    #nome
    #preco
    #dataFabricacao
    #dataValidade
    #vencimento

    constructor(nome, preco, dataFabricacao, dataValidade,vencimento) {

        this.#nome = nome;
        this.#preco = preco;
        this.#dataFabricacao = dataFabricacao;
        this.#dataValidade = dataValidade;
        thia.#vencimento = vencimento;

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

    get getDataValidade() { return this.#dataValidade }

  
    set setVencimento(vencimento){

     this.#vencimento=vencimento

   }

  get getVencimento(){

  return this.#vencimento

 }



    toString() {

       return `Nome do produto: ${this.#nome} Preco: ${this.#preco} Data Fabricação: ${this.#dataFabricacao} Data de Validade: ${this.#dataValidade} ${this.#vencimento}`

    }

}