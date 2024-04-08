import express from 'express'
const app = express()
const port = process.env.PORT || 3000
import web from './routes/web.js'
import {join} from 'path'



// Setup the Directory where template files are located
app.set('views', './views')   // agar hm apni ejs files ko by default views naam ke folder me de rhe h to le line likne ki need nhi h vo bydefault hi lelegaa. agar kisi or naam ke folder me likhte h to app.set('views', './folder_name')


//setup template engine to use
app.set('view engine', 'ejs')

//static files
app.use(express.static(join(process.cwd(), 'public')))

// Load Routes
app.use('/', web)

app.listen(port, ()=>{
    console.log(`Listen on http://localhost:${port}`);
})