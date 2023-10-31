class Principal {
    constructor() {
        this.calcularButton = document.getElementById("ExibriDetalhes");
        this.calcularButton.addEventListener("click", this.calcularMediaENotas.bind(this));
    }

    tratarData(data) {
        if (!data) {
            return new Date().toLocaleDateString();
        }
        return data;
    }

    formatarCPF(cpf) {

        if(/^[0-9]+$/){
            return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
            
        }
        

    }
   

    validarMatricula(matricula) {
        if (/^\d{7}$/.test(matricula)) {
            return true;
        }
        return false;
    }

    validarTurma(turma) {
        if (/[a-zA-Z\u00C0-\u00FF-]+/i.test(turma)) {
            return true;
        }
        return false;
    }

    validarDisciplina(disciplina) {
        if (/^[A-Za-z]+$/.test(disciplina)) {
            return true;
        }
        return false;
    }

    validarNome(nome) {
        if (/^[A-Za-z]+$/.test(nome)) {
            return true;
        }
        return false;
    }

    validarNotas(notas) {
        for (const nota of notas) {
            if (isNaN(nota) || nota < 0 || nota > 10) {
                alert("As notas devem ser números entre 0 e 10.");
                return false;
            }
        }
        return true;
    }

    calcularMediaNotasProvas(notas) {
        return (notas[0] + notas[1] + notas[2]) / 3;
    }

    calcularMediaNotasTrabalhos(notas) {
        return (notas[0] + notas[1] + notas[2]) / 3;
    }

    verificarAprovacao(mediaProvas, mediaTrabalhos) {
        if (mediaProvas >= 5 && mediaTrabalhos >= 5) {
            return "Aprovado";
        }
        return "Reprovado";
    }

    calcularMediaENotas() {
        const data = this.tratarData(document.getElementById("data").value);
        const cpf = this.formatarCPF(document.getElementById("cpf").value);
        const matricula = document.getElementById("matricula").value;
        const nome = document.getElementById("nome").value;
        const numero = document.getElementById("numero").value;
        const turma = document.getElementById("turma").value;
        const disciplina = document.getElementById("disciplina").value;
        const nota1 = parseFloat(document.getElementById("nota1").value);
        const nota2 = parseFloat(document.getElementById("nota2").value);
        const nota3 = parseFloat(document.getElementById("nota3").value);
        const trabalho1 = parseFloat(document.getElementById("trabalho1").value);
        const trabalho2 = parseFloat(document.getElementById("trabalho2").value);
        const trabalho3 = parseFloat(document.getElementById("trabalho3").value);

        if (!this.validarMatricula(matricula)) {
            alert("A matrícula deve conter exatamente 7 dígitos.");
            return;
        }

        if (!this.validarTurma(turma)) {
            alert("O nome da turma deve conter apenas letras e números.");
            return;
        }

        if (!this.validarDisciplina(disciplina)) {
            alert("O nome da disciplina deve conter apenas letras maiúsculas e minúsculas.");
            return;
        }

        if (!this.validarNome(nome)) {
            alert("O nome deve conter apenas letras maiúsculas e minúsculas.");
            return;
        }

        if (!this.validarNotas([nota1, nota2, nota3, trabalho1, trabalho2, trabalho3])) {
            return;
        }

        const mediaProvas = this.calcularMediaNotasProvas([nota1, nota2, nota3]);
        const mediaTrabalhos = this.calcularMediaNotasTrabalhos([trabalho1, trabalho2, trabalho3]);

        const status = this.verificarAprovacao(mediaProvas, mediaTrabalhos);

        const resultado = `
            Data: ${data}<br>
            CPF do Aluno: ${cpf}<br>
            Matrícula do Aluno: ${matricula}<br>
            Nome do Aluno: ${nome}<br>
            Número do Aluno: ${numero}<br>
            Nome da Turma: ${turma}<br>
            Nome da Disciplina: ${disciplina}<br>
            Média das Notas das Provas: ${mediaProvas.toFixed(2)}<br>
            Média das Notas dos Trabalhos: ${mediaTrabalhos.toFixed(2)}<br>
            Situação: ${status}<br>
        `;

        document.getElementById("resultado").innerHTML = resultado;
    }
}

const app = new Principal();
