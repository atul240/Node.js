// const express = require('express')
// const stu = require('./routes/student.js')
// const tea = require('./routes/teacher.js')


import express from 'express';
import stu from './routes/student.js'
import tea from './routes/teacher.js'

const app = express()
const port = process.env.PORT || 3000;


//load router modules
app.use('/student', stu)
app.use('/teacher', tea)

app.listen(port, ()=>{
    console.log(`Server listening at https://localhost:${port}`);
})






// import express from 'express'

// const app = express();
// const port = process.env.PORT || 3000;

// const route = express.Router();


// app.get('/student', (req, res, next)=>{
//     res.send("hello")
//     next()
// }, ()=>{
//     console.log("this is last call back");
// })

// app.get('/', (req,res)=>{
//     res.send("hello world");
// })

// app.get('/student/delete/:id/:val', (req,res)=>{
//     res.send(`Id : ${req.params.id} and Name : ${req.params.val}.`)
//     console.log(req.params);
// })

// app.use(route)

// app.param('id', (req,res,next,id)=>{
//     console.log(`Id : ${id}`);
//     next()
// })

// app.get('/user/:id', (req,res,next)=>{
//     console.log(`This is callback calling from param1`);
//     res.send(`respond from Id1 : ${req.params.id}`)
//     next()
// })

// app.get('/user/:id', (req,res)=>{
//     console.log(`This is callback calling from param2`);
//     // res.send(`respond from Id2 : ${req.params.id}`)
// })


// app.param() -- array of route para,aeter

// app.param(['id','page'], (req,res,next,value)=>{
//     console.log(`looking only on id : ${value}`)
//     console.log(`looking only on id : ${value}`)
//     next()
// })
// app.get('/user/:id/:page', (req,res,next)=>{
//     console.log(`This is id path1`);
//     // res.send(`Successfully executed...`)
//     next()
// })
// app.get('/user/:id/:page', (req,res)=>{
//     console.log(`This is id path2`);
//     res.send(`Successfully executed...`)
// })

//Query string 

// app.get(`/product`, (req, res)=>{
//     console.log(req.query);
//     res.send("Response Okk...") 
// })


// app.listen(port, ()=>{
//     console.log(`listen on https://localhost:${port}`)
// })


























// Messy code 
// all students route
// app.get('/student/all', (req, res)=>{
//     res.send('All Student')
// })
// app.post('/student/create', (req,res)=>{
//     res.send('New Student created')
// })
// app.put('/student/update', (req,res)=>{
//     res.send('Student updated')
// })
// app.delete('/student/delete', (req,res)=>{
//     res.send('Student deleted')
// })

// //all Teacher route
// app.get('/teacher/all', (req, res)=>{
//     res.send('All teacher')
// })
// app.post('/teacher/create', (req,res)=>{
//     res.send('New teacher created')
// })
// app.put('/teacher/update', (req,res)=>{
//     res.send('teacher updated')
// })
// app.delete('/teacher/delete', (req,res)=>{
//     res.send('teacher deleted')
// })




