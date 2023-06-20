// chamando o modulo
const express = require('express')
// inicializando o express
const app = express()

app.listen('3000')

app.route('/').get((req, res) => {
    
})