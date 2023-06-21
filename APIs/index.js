// chamando o modulo
const express = require('express')
// inicializando o express
const app = express()
let autor = "Thiago"

app.listen('3000')

// GET
app.route('/').get((req, res) => {
    res.send(autor)
})

// POST
// ponte entre as requisicoes middleware
app.use(express.json()) // vou chamar o modulo

app.route('/').post((res, res) => {
    res.send(req.body)
})

// PUT
app.route('/').put((req, res) => {
    autor = req.body.autor
    res.send(autor)
})

// DELETE 
app.route('/:identificados').delete((req, res) => {
    res.send(req.params.identificados)
})