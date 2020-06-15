// IMPORTAR A DEPENDÊNCIA DO SQLITE3
 const sqlite3 = require("sqlite3").verbose()
 
 
 //INICIAR O OBJETO DE BANCO DE DADOS
 const db = new sqlite3.Database("./src/database/database.db")

 module.exports = db  // exporta o bando de dados para aplicação  --> uso no require com endereço do arquivo

 // UTILIZAR O OBJETO DE BANCO DE DADOS , PARA NOSSAS OPERAÇÕES
 /*
 db.serialize(() => {
        // Com comandos sql

        // 1: Criar uma tabela
        db.run(`
            CREATE TABLE IF NOT EXISTS places (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                image TEXT,
                name TEXT,
                address TEXT,
                address2 TEXT,
                state TEXT,
                city TEXT,
                items TEXT
            );
        `)

        // 2: Inserir dados na tabela
        const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

            const values = [
                "http://google.com",
                "Papersider",
                "rua das alamedas, harmonia",
                "número 26",
                "Rio Grande do Sul",
                "óleo"
         ]

         function afterInsertData(err){         //função de retorno
            if (err) {
                return console.log(err)
            }

            console.log("Cadastrado com sucesso!")
            console.log(this)
               }

        db.run( query, values, afterInsertData)  // função entra como parâmetro

        // 3: Consultar os dados da tabela

        db.all(`SELECT * FROM places`, function(err,rows){
            
            if (err) {
                return console.log(err)
            }

            console.log("Aqui estão seus registros")
            console.log(rows)

        })

        // 4: deletar um dado na tabela

        db.run(`DELETE FROM places WHERE id = ?`, [4], function(err){

            if (err) {
                return console.log(err)
            }

            console.log("Registro deletado com sucesso!")

        })



 })
 
*/