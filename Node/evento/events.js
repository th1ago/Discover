// utilizando evento
const { EventEmitter } = require('events')
const ev = new EventEmitter()

// ouvindo o evento - executar a action
// on, para ouvir sempre
// once, executa uma unica vez
ev.on('Alguma coisa', (message) => {
    console.log('Eu ouvi voce', message)
})

// disparando o evento
ev.emit('Alguma Coisa', "Thiago")