import express from "express";
import connectDB from "./db/connectdb.js";
import './models/Student.js'
const app = express()	
const port = process.env.PORT || 3000
const DATABASE_URL = "mongodb://127.0.0.1"


//Database connection
connectDB(DATABASE_URL)

app.listen(port, ()=>{
    console.log(`Listen on http://localhost${port}`);
})