const fs = require('fs') // REQUISITANDO O MÓDULO file system

/* 
    readFile() FUNÇÃO QUE LÊ UM ARQUIVO. PARÂMETROS:
        - caminho: É o caminho para o arquivo que você deseja ler.
        
        - opções (opcional): Um objeto que pode especificar opções para a leitura do arquivo, como a codificação de caracteres.
        
        - callback: Uma função que é chamada quando a leitura do arquivo é concluída. Esta função tem dois parâmetros: err e dados. err é um objeto de erro, caso ocorra algum problema durante a leitura do arquivo. dados é um objeto Buffer que contém o conteúdo do arquivo, ou uma string se a opção de codificação for especificada.
*/

fs.readFile('arquivo.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log('Erro!')
    } else {
        console.log(data)
    }
})