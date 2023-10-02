import Cliente from "./Cliente.js";


document.getElementById("enviar").addEventListener("click", function calcular() {

    let cliente = new Cliente();
    let nome = document.getElementById("nome").value;
    let data = new Date(document.getElementById("data").value);
    let hoje = new Date()

    cliente.setNomeCompleto = nome
    cliente.setDataCliente = data

    let result = hoje.getFullYear() - data.getFullYear() - 1 * - 1

    document.getElementById("saida").innerText = `Seu Primeiro nome é ${cliente.getNomeCompleto}, Voce tem ${result} anos`


})

