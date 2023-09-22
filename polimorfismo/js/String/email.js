let texto = 'Meu email eh nome@dominio.com'

let expressao = /[a-z]+@[a-z]+.[a-z]+/g  

let novoTexto = texto.match(expressao);

console.log(novoTexto)