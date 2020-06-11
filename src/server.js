const express = require("express")
const server = express()

//Configurar pasta píblica
server.use(express.static("public"))

//Utilizando TEMPLATE ENGINE  Transforma html acessível para funções.

const nunjucks = require("nunjucks") // 1:00:00 do vídeo  // pedindo um módulo , uma dependência
nunjucks.configure("src/views",{  //1º Local onde ta os htmls

    express: server,   // ligação do nunjucks com o server
    noCache: true
})


// Configurar camonhos para a minha aplicação
//Página incial
//req: Requisição (Pergunta)
//res: Resposta


// ROTAS
server.get("/",function(req, res) {  // Server pede uma barra , envia a barra e executa uma função

   return res.render("index.html",{title:"Um Título"})   //variáveis utilizando render
})


server.get("/create-point",function(req, res) {  // Server pede uma barra , envia a barra e executa uma função

    return res.render("create-point.html")
})


server.get("/search-results",function(req, res) {  // Server pede uma barra , envia a barra e executa uma função

   return res.render("search-results.html")     //trocar sendfiles por render
})
//FIM DE ROTAS



// ligar o servidor
server.listen(3000) //fica ouvindo na porta 3000 