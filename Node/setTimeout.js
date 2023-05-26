// setTimeout roda uma func depois de X milissegundos

const timeOut = 3000
const finished = () => console.log('done!')

// a func finished 'e uma callback 
// depois de 3seg ela vai ser chamada
setTimeout(finished, timeOut)

// modelo assincrono
console.log('Mostrar')