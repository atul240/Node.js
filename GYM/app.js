import express from "express";
import web from './routers/web.js'
const app = express()
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs')

// static files
app.use('/',express.static('public'));

app.use('/', web)

app.listen(port, ()=>{
    console.log(`Listen in http://localhost:${port}`);
})