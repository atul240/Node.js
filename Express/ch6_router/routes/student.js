import express from 'express';

const router = express.Router()


// all students route
router.get('/all', (req, res)=>{
    res.send('All Student')
})
router.post('/create', (req,res)=>{
    res.send('New Student created')
})
router.put('/update', (req,res)=>{
    res.send('Student updated')
})
router.delete('/delete', (req,res)=>{
    res.send('Student deleted')
})

// module.exports = router

export default router