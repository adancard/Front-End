let telefone = 'Meu telefone é (123) 12345-1234'

let expressao = /\(\d{3}\) \d{5}-\d{4}/

let novoTexto = telefone.match(expressao);

console.log(novoTexto)