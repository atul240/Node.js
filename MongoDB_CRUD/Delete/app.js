import express from "express";
import connectDB from "./db/connectdb.js";
import './models/Student.js'
// import creatDoc from "./models/Student.js";
import {updateDocById,updateOneByfees} from "./models/Student.js";
const app = express()	
const port = process.env.PORT || 3000
const DATABASE_URL = "mongodb://127.0.0.1"


//Database connection
connectDB(DATABASE_URL)

// updateDocById('661ea4b0a3e2e4990c5e1ae6');
updateOneByfees(6500.4);



app.listen(port, ()=>{
    console.log(`Listen on http://localhost${port}`);
})