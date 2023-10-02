export default class Aluno{

    #nome
    #dataNascimento
    #nota

    constructor(nome,dataNascimento,nota){

        this.#nome=nome
        this.#dataNascimento = new Date(dataNascimento)
        this.#nota =nota

    }

    set setNome(nome){

        this.#nome = nome

    }

    get getNome(){return this.#nome}

    set setDataNascimento(dataNascimento){

        this.#dataNascimento = dataNascimento

    }

    get getDataNascimento (){return this.#dataNascimento}

    set setNota(nota){

        this.#nota = nota

    }

    get getNota(){return this.#nota}


    calcularIdade(){

        const hoje = new Date()

        return hoje.getFullYear() - this.#dataNascimento.getFullYear()

    }

    toString(){

       return `Nome:${this.#nome}
        Idade: ${calcularIdade()}
        Nota: ${this.#nota}`

    }


}