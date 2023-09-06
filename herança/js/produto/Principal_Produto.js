import Produto_Eletronicos from "./Produto_Eletronico.js"
import Produtos_Alimenticio from "./Produto_Alimenticio.js";

function inciar() {

    let produtoAlimenticio = new Produtos_Alimenticio("Arroz", 20, 101, 2.5, "10 / 9 / 2004");
    let produtoEletronico = new Produto_Eletronicos("Celular", 2.500, 102, 10.5, 220);

    produtoAlimenticio.exibirAlimentos();
    produtoEletronico.exibirEletronicos();

}

document.addEventListener("DOMContentLoaded", inciar)