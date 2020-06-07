const express = require("express")
const server = express()

//Configurar pasta píblica
server.use(express.static("public"))

// Configurar camonhos para a minha aplicação
//Página incial
//req: Requisição (Pergunta)
//res: Resposta
server.get("/",function(req, res) {  // Server pede uma barra , envia a barra e executa uma função

    res.sendFile(__dirname +"/views/index.html")
})


server.get("/create-point",function(req, res) {  // Server pede uma barra , envia a barra e executa uma função

    res.sendFile(__dirname +"/views/create-point.html")
})


server.get("/search-results",function(req, res) {  // Server pede uma barra , envia a barra e executa uma função

    res.sendFile(__dirname +"/views/search-results.html")
})

// ligar o servidor
server.listen(3000) //fica ouvindo na porta 3000 