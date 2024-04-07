import express from 'express'
import { allStudent, deleteStudent } from '../controllers/studentController.js'
const router = express.Router()

// router.get('/all', (req,res)=>{
//     res.send(`Student list`)
// })

// router.get('/delete/:id([0-9]{2})', (req,res)=>{
//     console.log(req.params);
//     const {id} = req.params
//     console.log(id);
//     if(id==10){
//         res.send(`can't be deleted id ${req.params.id}`)
//     }
//     res.send(`deleted...`)
// })


router.get('/all', allStudent)

router.get('/delete/:id([0-9]{2})', deleteStudent)

export default router 