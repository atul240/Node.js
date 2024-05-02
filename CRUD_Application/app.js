import express from "express";
import { connectDB } from "./db/connectdb.js";
import web from './routes/web.js'
const app = express()
const port = process.env.PORT || 3000
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://27017";
const DATABASE_URL = "mongodb://127.0.0.1:27017"
app.use(express.urlencoded({ extended: true }));

// Set Engine
app.set('view engine', 'ejs')

// Database connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({extended:true}))

// Static Files
app.use('/student',express.static('public'));
app.use('/student/edit',express.static('public'));

// Load Routes
app.use("/student", web)


app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})