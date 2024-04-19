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

// Update document	
const updateDocById = async(id) =>{
	try {
		const result = await studentModel.findByIdAndUpdate(id, {name:"Abc"})
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}

const updateOneByfees = async (fees) =>{
	try {
		const result = await studentModel.updateOne({fees : fees}, { name : 'Jay sri Ram'});
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}

export {updateDocById, updateOneByfees}