import express from 'express';

const router = express.Router()



//all Teacher route
router.get('/all', (req, res)=>{
    res.send('All teacher')
})
router.post('/create', (req,res)=>{
    res.send('New teacher created')
})
router.put('/update', (req,res)=>{
    res.send('teacher updated')
})
router.delete('/delete', (req,res)=>{
    res.send('teacher deleted')
})

export default router