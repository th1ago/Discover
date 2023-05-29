const express = require('express');
const app = express(); // instacinado o express

// utilizando o express
// view engine - ferramenta que vai renderizar o html 
app.set("view engine", "ejs");

// criando uma rota
app.get("/", function(req, res) {
    const items = [
        {
            title: "A",
            message: "teste A"
        },
        {
            title: "B",
            message: "teste B"
        },
    ];
    res.render("pages/index", {
        quality: items,
    });
});

app.get("/sobre", function(req, res) {
    res.render("pages/about");
})

// app carrega tudo do express
app.listen(8080);
console.log("executando")