import Carro from "./Carro.js";
import Caminhao from "./Caminhao.js";

function inciar(){

    let carro = new Carro("chevrole","um carro",1900,2.5);
    let caminhao = new Caminhao("audi","um caminhao potente",1890,1400);

    carro.exibirCarro();
    caminhao.exibirCaminhao();


}

document.addEventListener("DOMContentLoaded", inciar)