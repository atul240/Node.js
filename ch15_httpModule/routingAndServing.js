import http from 'http';

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url === '/'){
        res.end("<h1>Home page</h1>");
    }
    else if(req.url === '/about'){
        res.end("<h1>About page</h1>")
    }
    else{
        res.end("<h1>404 page not found...</h1>")
    }
})


server.listen(8080, 'localhost');