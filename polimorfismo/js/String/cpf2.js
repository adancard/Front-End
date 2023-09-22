let texto = 'Meu cpf é 999.999.999.99'

let expressao = /\d{3}.\d{3}.\d{3}.\d{2}/g

let novoTexto = texto.match(expressao)

console.log(novoTexto)