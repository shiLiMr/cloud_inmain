
import http from 'http';
const port =7777;
const server=http.createServer((req,res)=>{
    res.end('Hello World')
})

server.listen(port)
