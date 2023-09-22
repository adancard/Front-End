let texto = `Ola tenho 18 anos`

let expressao = /\d+/g

let novoTexto = texto.match(expressao)

console.log(novoTexto)