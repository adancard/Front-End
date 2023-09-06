import Produto from "./Produto.js";

export default class Produto_Eletronicos extends Produto {

    #voltagem

    constructor(nome, preco, codigoDeIdentificacao, quantidade, voltagem) {

        super(nome, preco, codigoDeIdentificacao, quantidade);

        this.#voltagem = voltagem;

    }

    get getVoltagem() { return this.#voltagem }

    exibirEletronicos() {
        super.exibir();
        console.log("Voltagem é: " + this.#voltagem)

    }


}