import connectDB from './db/connectdb.js';
import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;
// const DATABASE_URL = "mongodb://localhost:27017/schooldb";
const DATABASE_URL = "mongodb://127.0.0.1/schooldb";

// mongoose.connect("mongodb://localhost:27017/schooldb").then(()=>{
//     console.log('Connected Successfully...');
// })

connectDB(DATABASE_URL)
console.log(`Welcome`);

app.get('/', (req,res)=>{
    res.send(`Ready to work on Database`)
})


app.listen(port, ()=>{
    console.log(`Listen on http://localhost:${port}`);
})