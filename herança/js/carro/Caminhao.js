import Veiculo from "./veiculo.js";

export default class Caminhao extends Veiculo{

    #capacidade

    constructor(marca,modelo,anoFabricacao,capacidade){
        
        super(marca,modelo,anoFabricacao)

        this.#capacidade = capacidade;

    }

    get getCapacidade(){return this.#capacidade}


    exibirCaminhao(){

        super.exibir();
        console.log("Capacidade Maxima: "+this.#capacidade)

    }


}