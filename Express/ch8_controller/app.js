import express from 'express'
import stu from './routes/student.js'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.send(`Welcome`)
})

app.use('/student', stu)


app.listen(port, ()=>{
    console.log(`Listen on https://localhost:${port}`);
})