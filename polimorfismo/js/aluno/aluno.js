import pessoa from "./pessoa.js";

export default aluno;

function aluno(nome, idade, NumeroMatricula) {

    pessoa.call(this, nome, idade)
    this.NumeroMatricula = NumeroMatricula;

}

aluno.prototype = Object.create(pessoa.prototype);
aluno.prototype.constructor = aluno;

aluno.prototype.apresentar = function(){

    return `Meu nome é ${this.nome} tenho ${this.idade} e o numero da minha matricula é ${this.NumeroMatricula}`

}




