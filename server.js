const http = require('http');

console.log(http)

server = http.createServer((req, res)=>{
    res.end("Servidor no AR!!!")
})

server.listen(3000, console.log("rodando na 3000"))