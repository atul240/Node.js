import express from "express";
import connectDB from "./db/connectdb.js";
import './models/Student.js'
// import creatDoc from "./models/Student.js";
import {getSingleDoc,getSingleDocSpecificField,getDocByField} from "./models/Student.js";
const app = express()	
const port = process.env.PORT || 3000
const DATABASE_URL = "mongodb://127.0.0.1"


//Database connection
connectDB(DATABASE_URL)

//create and save document
// creatDoc()

//read document

// getAllDoc()
// getSingleDoc()
// getSingleDocSpecificField()
getDocByField()



app.listen(port, ()=>{
    console.log(`Listen on http://localhost${port}`);
})