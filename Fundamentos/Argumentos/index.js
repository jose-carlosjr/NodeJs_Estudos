// nome

console.log(process.argv)

/*
    console.log(process.argv) RETORNA O SEGUINTE ARRAY:
    [
      'C:\\Program Files\\nodejs\\node.exe',
      'C:\\Users\\jctes\\OneDrive\\Documentos\\GitHub\\NodeJs_Estudos\\Fundamentos\\Argumentos\\index.js', // O 
      'nome=jose'
    ]

    - O EXECUTÁVEL DO NODE
    - O ARQUIVO QUE TÁ EXECUTANDO
    - O ARGUMENTO
*/

// FORMA DE PEGAR SOMENTE O ARGUMENTO
const args = process.argv.slice(2)
console.log(args)

// FORMA DE PEGAR O VALOR DO ARGUMENTO
const nome = args[0].split('=')[1]
console.log(nome)

const idade = args[1].split('=')[1]
console.log(idade)

console.log(`O nome é: ${nome} e a idade é: ${idade}!`)