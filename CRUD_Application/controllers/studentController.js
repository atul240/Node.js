import StudentModel from "../models/student.js"


class StudentController {

    // create Document
    static createDoc = async (req, res) => {
        try {
            const {
                name,
                age,
                fees
            } = req.body
            const data = new StudentModel({
                name: name,
                age: age,
                fees: fees
            })
            res.redirect("/student")
            //saving document
            await data.save()
        } catch (error) {
            console.log(error);
        }
        // console.log(`Create Docpost method`);
        // console.log(req.body.name);
    }

    // Retrive all document
    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModel.find()
            // console.log(result);
            res.render('index', {
                data: result
            })
            var count = await StudentModel.countDocuments({});
            // console.log("Total number of documents:", count);
        } catch (error) {
            console.log(error);
        }
    }

    static editDoc = async (req, res) => {
        // console.log(req.params.id)
        try {
            const result = await StudentModel.findById(req.params.id)
            // console.log(result);
            res.render('edit', {
                data: result
            })
        } catch (error) {

        }
        // StudentModel.findById(re)
        // res.render('edit')
    }

    static updateDocById = async (req, res) => {
        // console.log(req.params.id);
        // console.log(req.body);
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
        res.redirect('/student')
    }

    static deleteDocById = async (req, res) => {
        console.log(req.params.id);
        try {
            const result = await StudentModel.deleteOne({
                _id: (req.params.id)
            })
            console.log(result);
        } catch (error) {
            console.log(error);
        }
        res.redirect('/student')
    }
}

export default StudentController