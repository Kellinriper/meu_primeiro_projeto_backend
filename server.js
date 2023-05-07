const express = require("express")

const app = express()
const porta = 3333

function mostraPorta(params) {
    console.log("Servidor criado e rodando na porta ", porta)
    
}

app.listen(porta, mostraPorta)