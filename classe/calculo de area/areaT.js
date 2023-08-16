export class Triangulo{

    #base
    #altura

    constructor(base,altura){

        this.#altura=altura
        this.#base=base

    }

    get base(){

        return this.#base
    }

    set base(base){

        this.#base=base;

    }

    get altura(){

        return this.#altura;

    }

    set altura(altura){

        this.#altura=altura;

    }

    Calcular(){

        this.base*this.altura/2;

    }

    toString(){

        return `A area do triangulo é: ${this.Calcular}`

    }


}