import express from "express";
import {join} from 'path'
const app = express()
const port = process.env.PORT || 3000

import web from './routes/web.js'

// static files
app.use(express.static(join(process.cwd(),'public')))
// app.use(express.static(join(__dirname, 'public')));


// agar kisi specific file ko access dena ho
// app.use('/css', express.static(join(process.cwd(),'public/css')))


//load routes
app.use('/', web)


app.listen(port, ()=>{
    console.log(`Listen on http://localhost:${port}`);
})