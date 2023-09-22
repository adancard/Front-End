let texto = 'Meu cpf é 99999-999'

let expressao = /\d{5}-\d{3}/g

let novoTexto = texto.match(expressao)

console.log(novoTexto)