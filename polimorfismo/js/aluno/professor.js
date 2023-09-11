import pessoa from "./pessoa.js";

export default professor;

function professor (nome,idade,especialidade){

    pessoa.call(this,nome,idade)
    this.especialidade=especialidade;

}

professor.prototype = Object.create(pessoa.prototype)
professor.prototype.constructor = professor

professor.prototype.apresentar = function(){

    return `Meu nome é ${this.nome} tenho ${this.idade} e dou aula de ${this.especialidade}`

}