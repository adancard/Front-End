export default class Veiculo{

    #marca
    #modelo
    #anoFabricacao

    constructor(marca,modelo,anoFabricacao){

        this.#marca=marca
        this.#modelo=modelo
        this.#anoFabricacao=anoFabricacao;

    }

    get getMarca(){return this.#marca}

    get getModelo(){return this.#modelo}

    get getAnoFabricacao(){return this.#anoFabricacao}


    exibir(){

        console.log("Marca do Veiculo: "+this.#marca+" Modelo do Veiculo: "+this.#modelo+ " Ano de Fabricacao: "+this.#anoFabricacao)

    }



}