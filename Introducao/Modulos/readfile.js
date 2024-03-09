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

/*
    Um módulo é basicamente um arquivo JavaScript (ou um conjunto de arquivos JavaScript) que encapsula funcionalidades específicas e pode ser reutilizado em outros arquivos JavaScript. Esses arquivos podem conter variáveis, funções, classes ou mesmo objetos complexos.

    Existem dois tipos principais de módulos no Node.js: módulos integrados (core modules) e módulos externos (third-party modules).

    Módulos Integrados (Core Modules): São os módulos que vêm pré-instalados com o Node.js. Eles oferecem funcionalidades básicas para lidar com tarefas comuns, como manipulação de arquivos, criação de servidores HTTP, etc. Alguns exemplos de módulos integrados são fs (File System), http, path, util, etc.

    Módulos Externos (Third-Party Modules): São módulos criados por terceiros e disponibilizados através do gerenciador de pacotes npm (Node Package Manager). Esses módulos oferecem uma ampla gama de funcionalidades que podem ser facilmente integradas em aplicativos Node.js. Para usar um módulo externo, você precisa instalá-lo usando o npm e, em seguida, pode importá-lo nos seus arquivos JavaScript conforme necessário.

    Para usar um módulo em um arquivo JavaScript, você usa a função require() fornecendo o caminho relativo ou absoluto para o arquivo do módulo. Por exemplo:

    const meuModulo = require('./meu-modulo');
    
    Isso importará o módulo local chamado meu-modulo.js no mesmo diretório do arquivo atual.

    Módulos no Node.js ajudam na organização do código, facilitam a reutilização de funcionalidades e promovem a modularidade e a manutenibilidade do código.
*/