export default class Turma{

    #nomeTurma
    #alunos

    constructor(nomeTurma){

        this.#nomeTurma = nomeTurma;
        this.#alunos = []

    }

    set setNomeTurma(nomeTurma){

        this.#nomeTurma=nomeTurma

    }

    get getNomeTurma(){return this.#nomeTurma}


    adicionarAluno(aluno){

        this.#alunos.push(aluno)

    }

    removerAluno(indicesSelecionados){

        let alunos = this.#alunos

        indicesSelecionados.reverse();

        for(let i of indicesSelecionados){

            alunos.splice(i,1)
        }
        
    }

    listarAlunos(){

        let listaDeAlunos = document.getElementById("saida")

      
        for (let i = 0; i < this.#alunos.length; i++) {

            let aluno = this.#alunos[i]
            let itemAluno = document.createElement("li")

            let alunoTexto = document.createTextNode(`${aluno.toString()}`)

            itemProduto.appendChild(alunoTexto)

            listaDeAlunos.appendChild(itemAluno)

        }


    }

    calcularMedia(){



    }


}