// impostando o servidor para request

const http = require ('http')

http.createServer((request, response) => {
    response.writeHead(200, { 'content-Type': 'application/json'})

    if (request.url = '/contacto'){
        response.end(JSON.stringify({
            massage: 'CONTACTO URL'
        }));
    }; 

    if (request.url = '/galeria'){
        response.end(JSON.stringify({
            massage:'GALERIA URL'
        })) 
    }; 
    
    response.end(JSON.stringify({
        massage: 'ROTA NaO CONFIGURADA'
    }))
}).listen(4001, () => console.log('O servidor esta a rodar na porta 4001'))


async function jsAsync(params) {
     return await setTimeout(() => {
        console.log("Hello")
     }, 100)
}


