export default class Funcionaro{

    #nome
    #dataContratacao
    #dataDemisao
    #horasExtras
    #salario

    constructor(nome,dataContratacao,dataDemisao,horasExtras,salario){

        this.#nome = nome;
        this.#dataContratacao = dataContratacao;
        this.#dataDemisao = new Date(dataDemisao);
        this.#horasExtras = new Date(horasExtras);
        this.#salario = salario;

    }

    set setNome(nome){

        this.#nome = nome

    }

    get getNome(){return this.#nome}

    set setDataContratacao(dataContratacao){

        this.#dataContratacao = dataContratacao;

    }

    get getDataContratacao(){return this.#dataContratacao}


    set setDataDemisao(dataDemisao){

        this.#dataDemisao = dataDemisao

    }

    get getDataDemisao(){return this.#dataDemisao}

    set setHorasExtras(horasExtras){

        this.#horasExtras = horasExtras

    }

    get getHorasExtras(){return this.#horasExtras}

    set setSalario(salario){

        this.#salario = salario;

    }

    get getSalario(){return this.#salario}


    calcularTempoTrabalho(){
        const dataAtual = new Date()
        const tempoMilissegundo = this.dataDemisao
            ? this.dataDemisao - this.dataContratacao
            : dataAtual - this.dataContratacao;

        const anosTrabalho = Math.floor(tempoMilissegundo /(365.25 * 24 * 60 * 60 * 1000))
        const mesesTrablho = Math.floor((tempoMilissegundo) % (365.25 * 24 * 60 * 60 * 1000) / (30.44 * 24 * 60 * 60 * 1000))

        return {anosTrabalho, mesesTrablho}

    }  


    calcularPagamentoMensal(){

        const diasNoMes = 30
        const salarioMensal = this.salario / diasNoMes
        const pagamentoHorasExtras = this.horasExtras *(salarioMensal / diasNoMes)
        const pagamentoTotal = salarioMensal + pagamentoHorasExtras

        return parseFloat(pagamentoTotal.toFixed(2));

    }

    exibirDetalhesFuncionario(){

        const tempoTrabalho = this.calcularTempoTrabalho();
        const formattedContratacao = this.#dataContratacao.toLocaleDateString('pt-BR')
        const formattedDemisao = this.#dataDemisao ? this.#dataDemisao.toLocaleDateString('pt-BR') : 'Atualmente empregado'

        console.log('Detalhes do Funcionário:');
        console.log('Nome:', this.nome);
        console.log('Tempo na Empresa:', `${tempoTrabalho.anosTrabalho} anos e ${tempoTrabalho.mesesTrablho} meses`);
        console.log('Salário Atual:', `R$ ${this.calcularPagamentoMensal()}`);
        console.log('Data de Contratação:', formattedContratacao);
        console.log('Data de Demissão:', formattedDemisao);
    }

}