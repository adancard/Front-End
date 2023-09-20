export default class Cliente {

    #nomeCompleto
    #dataCliente

    constructor(nomeCompleto, dataCliente) {

        this.#nomeCompleto = nomeCompleto
        this.#dataCliente = dataCliente;

    }

    set setNomeCompleto(nomeCompleto) {

        this.#nomeCompleto = nomeCompleto;

    }

    get getNomeCompleto() {
        let parsteNomes = this.#nomeCompleto.trim().split(" ")
        return parsteNomes[0]

    }


    set setDataCliente(dataCliente) {

        this.#dataCliente = dataCliente;

    }

    get getDataCliente() { return this.#dataCliente }


    toString() {

        `O seu Nome é ${this.getNomeCompleto}, Nasci em ${this.#dataCliente}`

    }

}