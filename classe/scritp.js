import { Triangulo } from './calculo de area/areaT';

class Nome {

    #nome
    #numero
    #idade

    constructor(nome, idade, numero) {

        this.#nome = nome;
        this.#numero = numero;
        this.#idade = idade;

    }

    get nome() {

        return this.#nome;

    }

    set nome(nome) {

        this.#nome = nome

    }

    get idade() {

        return this.#idade;

    }

    set idade(idade) {

        this.#idade = idade;

    }

    get numero() {

        return this.#numero;

    }

    set numero(numero) {

        this.#numero = numero;

    }

    toString() {

        return `Seu nome é ${this.nome}, sua idade é: ${this.idade}, seu numero é: ${this.numero}`;

    }


}



function Nomes() {

    let nome = new Nome("Adan", 18, 1)

    document.write(nome)


}

function Areas() {

    let triangulo = new Triangulo(base, altura)
    let base = + prompt("Insira a base")
    let altura = + prompt("Insira a altura")


    prompt(triangulo)

}





