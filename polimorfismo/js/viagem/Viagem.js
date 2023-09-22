export default class Viagem{

    #destino
    #dataPartida
    #dataRetorno
    #orcamento

    constructor(destino,dataPartida,dataRetorno,orcamento){

        this.#destino=destino;
        this.#dataPartida = dataPartida;
        this.#dataRetorno = dataRetorno;
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

        return `Destino : ${this.#destino}\n
        Data de Partida: ${this.#dataPartida}
        Data de Retorno ${this.#dataRetorno}
        Duração da Viagem: ${this.calcularDuracao()}
        ${this.verificarOrçamento()}`


    }

}