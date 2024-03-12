const path = require('path')

/*
    extname - Return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.
*/
const extension = path.extname('arquivo.php')

console.log(`A extensão do arquivo é: ${extension}`)

/*
    O módulo path no Node.js fornece utilitários para trabalhar com caminhos de arquivos e diretórios. Ele oferece várias funções que ajudam a manipular caminhos de uma forma que seja independente do sistema operacional, garantindo a portabilidade do código entre diferentes plataformas.

    Alguns dos principais métodos e propriedades fornecidos pelo módulo path incluem:

    - path.join([...paths]): Este método concatena segmentos de caminho fornecidos como argumentos em um único caminho. Ele é útil para construir caminhos de forma que sejam válidos em qualquer plataforma.

    - path.resolve([...paths]): Este método resolve os segmentos de caminho fornecidos em um caminho absoluto. Ele considera o diretório atual do processo Node.js e é útil para criar caminhos absolutos baseados em caminhos relativos.

    - path.basename(path[, ext]): Retorna o último segmento de um caminho, opcionalmente removendo a extensão do arquivo.

    - path.dirname(path): Retorna o diretório pai de um caminho.

    - path.extname(path): Retorna a extensão do arquivo de um caminho.

    - path.sep: Uma propriedade que fornece o separador de caminho do sistema operacional atual (por exemplo, / no Unix e \ no Windows).

    Essas são apenas algumas das funções e propriedades oferecidas pelo módulo path. Ele é amplamente utilizado em aplicativos Node.js para manipulação segura e consistente de caminhos de arquivo e diretório, independentemente do sistema operacional em que o código esteja sendo executado.
*/