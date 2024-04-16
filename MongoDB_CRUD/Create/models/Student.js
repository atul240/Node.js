import mongoose from "mongoose";

// Defining Schema
const studentSchema = new mongoose.Schema({
	name : {type : String, require:true},
	age : {type : Number, require:true, min:18, max:50},
	fees : {type : Number, require:true, validate: v => v>= 5500.50},
	hobbies : {type:Array},
	isactive : {type:Boolean},
	comments : [{value : {type:String}, publish:{type:Date, default : Date.now}}],
	join : {type:Date, default:Date.now}
})

// console.log(studentSchema.path('age'));

//compiling Schema  const studentModel = mongoose.model('collection_Name', 'schema_Name')
// const studentModel = mongoose.model('student', 'studentSchema')
const studentModel = mongoose.model('Student', studentSchema, 'students'); // Third parameter specifies the collection name

//creating new document

const creatDoc = async ()=>{
    try {
        const atulDoc = new studentModel({
            name : 'Atul',
            age : 22,
            fees : 6500.40,
            hobbies : ['sleeping', ' stoling'],
            isactive : true,
            comments : [{value:'This is good mongooes.'}]
        })
        const kapilDoc = new studentModel({
            name : 'Kapil',
            age : 27,
            fees : 6500.40,
            hobbies : ['studying', ' gaming'],
            isactive : true,
            comments : [{value:'This is good mongooes.'}]
        })
        const chotaDoc = new studentModel({
            name : 'Chota',
            age : 24,
            fees : 6500.40,
            hobbies : ['sleeping', ' stoling'],
            isactive : true,
            comments : [{value:'This is good mongooes.'}]
        })
        // saving  Document
        const result = await studentModel.insertMany([atulDoc, kapilDoc, chotaDoc])
        // console.log(result);
    } catch (error) {
        console.log(error);
    }
}


export default creatDoc;



