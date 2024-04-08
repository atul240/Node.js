// const http = require('http');

import http from 'http';

const server = http.createServer((req,res) => {
    res.end('Response from server');
    console.log("Response on console");
})

const port = process.env.PORT || 8080;

server.listen( port ,'localhost' , ()=>{
    console.log(`Server running on http://localhost${port}`);
})