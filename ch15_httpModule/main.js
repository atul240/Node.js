import http from 'http';
import fs from 'fs'
import { error } from 'console';

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url === '/' || req.url === '/home'){
        fs.readFile('./html_pages/home.html', (error, data)=>{
            if(error) throw error;
            res.end(data);
        });
    }else if(req.url === '/about'){
        fs.readFile('./html_pages/about.html', (error,data)=>{
            if(error) throw error;
            res.end(data);
        })
    }else{
        res.end("<h1>404 page not found</h1>")
    }
})

server.listen(8080, 'localhost');