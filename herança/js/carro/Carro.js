import Veiculo from "./veiculo.js";

export default class Carro extends Veiculo{

    #numeroDePorta


    constructor(marca,modelo,anoFabricacao,numeroDePorta){
        super(marca,modelo,anoFabricacao)

        this.#numeroDePorta = numeroDePorta;

    }

    get getNumeroDePorta(){return this.#numeroDePorta}


    exibirCarro(){

        super.exibir();
        console.log("Numero de Portas: "+this.#numeroDePorta)

    }

}