import http, { createServer } from 'http';

const server = http.createServer();
const PORT = 3000 

server.listen(PORT,()=>{
    console.log(`http://localhost//${PORT}`);
    
})
