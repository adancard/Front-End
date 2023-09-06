import Produto from "./Produto.js";

export default class Produtos_Alimenticio extends Produto {

    #dataValidade

    constructor(nome, preco, codigoDeIdentificacao, quantidade, dataValidade) {

        super(nome, preco, codigoDeIdentificacao, quantidade)

        this.#dataValidade = dataValidade;

    }

    get getDataValidade() { return this.#dataValidade }


    exibirAlimentos() {

        super.exibir();

        console.log("Data Validade: " + this.#dataValidade)

    }

}