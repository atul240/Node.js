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

//retreive all document

const getAllDoc = async ()=>{
    // const result = await studentModel.find().select('name age hobbies')
    const result = await studentModel.find().select('-name -age -hobbies')
    console.log(result);
	// result.forEach((item)=>{
	// 	console.log(item.comments[0].value);
	// 	console.log(item.comments[0]._id);
	// })
}


//retreive single doc
const getSingleDoc = async () =>{
	const result = await studentModel.findById("661ea4b0a3e2e4990c5e1ae2")
	// console.log(result);
	console.log(result._id.getTimestamp(), result.name, result.age);
}

const getSingleDocSpecificField = async () =>{
	const result = await studentModel.findById("661ea4b0a3e2e4990c5e1ae2", 'name age')
	console.log(result);
}

// retrieve document by field

const getDocByField = async ()=>{
	const result = await studentModel.find({hobbies : 'sleeping'});
	console.log(result);
}


export  {getAllDoc, getSingleDoc, getSingleDocSpecificField,getDocByField};


