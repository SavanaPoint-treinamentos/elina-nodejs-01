//importando o express
const express = require('express')
//INICIALIZANDO O EXPRESS
const app = express()


/*
//CRIANDO ROTA

app.get('/minharota', (request ,response) => {
    return response.json({
        message: 'Acessou a primeira rota',
    })
})

/*
 array onde possamos in serir os dados

 post-para inserir os dados
 get--busca os dodos
 put-a;terar os dados
 delete-remover um dado
body- usamos para enviar dados na aplicacao
*/
app.use(express.json())
const produtoDatos = []
app.post('/produto', (request, response) =>  {
    const { nome , valor }= request.body
    const produtos = ({
        nome,
        valor
    })

    produtoDatos.push(produtos)
    return response.json(produtoDatos)
})


//A DEFINICAO DO LISTEN
app.listen(3005, () => console.log('O servidor esta a rodar na porta 3005'))