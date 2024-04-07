const allStudent = (req,res)=>{
    res.send(`Student list`)
}

const deleteStudent = (req,res)=>{
    console.log(req.params);
    const {id} = req.params
    console.log(id);
    if(id==10){
        res.send(`can't be deleted id ${req.params.id}`)
    }
    res.send(`deleted...`)
}

export {allStudent, deleteStudent}   //nya tarikaa

// module.export = {allStudent, deleteStudent}   purana tarika



// app.js ---> routes/student.js  ------>  controller/studentController.js
