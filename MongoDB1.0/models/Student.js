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

console.log(studentSchema.path('age'));

//compiling Schema  const studentModel = mongoose.model('collection_Name', 'schema_Name')
// const studentModel = mongoose.model('student', 'studentSchema')
const Student = mongoose.model('Student', studentSchema, 'students'); // Third parameter specifies the collection name

// Model Name: The first parameter is the name of the model. This is the singular form of the name you want to use for the model. It's typically capitalized and singular.

// Schema: The second parameter is the schema definition. It's an instance of mongoose.Schema, which defines the structure and validation rules for documents in the collection.

// Collection Name: The third parameter (optional) is the name of the collection in the MongoDB database. If not specified, Mongoose will automatically pluralize the model name and use that as the collection name. However, if you want to specify a different collection name, you can pass it as the third parameter.

export default Student;



