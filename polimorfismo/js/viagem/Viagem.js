export default class Viagem{

    #destino
    #dataPartida
    #dataRetorno
    #orcamento

    constructor(destino,dataPartida,dataRetorno,orcamento){

        this.#destino=destino;
        this.#dataPartida = new Date(dataPartida);
        this.#dataRetorno = new Date(dataRetorno);
        this.#orcamento=orcamento;

    }


    set setDestino(destino){

        this.#destino=destino;

    }

    get getDestino(){return this.#destino}

    
    set setDataPartida(dataPartida){

        this.#dataPartida=dataPartida;

    }

    get getDataPartida(){return this.#dataPartida}

    
    set setDataRetorno(dataRetorno){

        this.#dataRetorno=dataRetorno;

    }

    get getDestino(){return this.#dataRetorno}


    
    set setOrcamento(orcamento){

        this.#orcamento=orcamento;

    }

    get getOrcamento(){return this.#orcamento}

    calcularDuracao(){

        const diaMilissegundos = 1000 * 60 * 60 * 24;
        const tempoMilissegundos = this.#dataRetorno - this.#dataPartida;
        return Math.ceil(tempoMilissegundos / diaMilissegundos) * -1;

    }


    verificarOrçamento(precoPassagem,precoHospedagem,precoAlimentacao){

        let somaGasto = precoAlimentacao + precoHospedagem + precoPassagem;

        let result = this.#orcamento - somaGasto;


        if(result > this.#orcamento){

            return `Esta fora do Orçasamento`

        }else{

            return`Esta dento do Orçamento`

        }


    }

    exibirDetalhesViagem(){

        return `Destino : ${this.#destino}
        Data de Partida: ${this.#dataPartida}
        Data de Retorno ${this.#dataRetorno}
        Duração da Viagem: ${this.calcularDuracao()}
        ${this.verificarOrçamento()}`


    }

}