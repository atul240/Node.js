import express from "express";
const router = express.Router()
import StudentController from '../controllers/studentController.js'



// GET route to display all students
router.get('/', StudentController.getAllDoc);

// POST route to create a new student
router.post('/', StudentController.createDoc); // Changed from GET to POST

// GET route to display form for editing a student
router.get('/edit/:id', StudentController.editDoc);

// GET route to update a student
// router.get('/update/:id', StudentController.updateDocById);

router.post("/update/:id", StudentController.updateDocById);

// GET route to delete a student
router.get('/delete/:id', StudentController.deleteDocById);

export default router;