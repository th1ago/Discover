/*
crie 2 arquivos ja
o primeiro ira exportar uma funcao getFlag() que recebera uma striung
essa funcao devera buscar dentro do array process.argv a flag desejada

o segundo ira importar a funcao e passar a flag
*/

function getFlag(text) {
    const index = process.argv.indexOf(text) + 1
    return process.argv[index];
}

module.exports = getFlag;