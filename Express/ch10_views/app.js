import express from 'express'
import web from './routes/web.js'
const port = process.env.PORT || 3000

const app = express()

app.use('/', web)

app.listen(port, (req,res)=>{
    console.log(`Listen on https://localhost:${port}`);
})