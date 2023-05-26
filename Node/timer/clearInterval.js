// clearInterval ira cancelar um setInterval registrado

const timeOut = 1000 // tempo de preparacao 
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)

setTimeout( () => clearInterval(interval), 3000) // 3000 - 1000 = 2000
