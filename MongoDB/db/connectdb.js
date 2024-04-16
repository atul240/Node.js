import mongoose from "mongoose";
// const connectDB = () => {
//     return mongoose.connect("mongodb://localhost:27017/schooldb")
//         .then(() => {
//             console.log(`Connected Successfully...`)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }


// const connectDB = (DATABASE_URL) => {
//     // return mongoose.connect(DATABASE_URL)
//     //     .then(() => {
//     //         console.log(`Connected Successfully...`)
//     //     })
//     //     .catch((err) => {
//     //         console.log(err);
//     //     })
//     return mongoose.connect(('mongodb://127.0.0.1/schooldb'), {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         })
//         .then(db => console.log('DB is connected'))
//         .catch(err => console.log(`not connect`));
// }

const connectDB = async (DATABASE_URL) => {
    try{
        await mongoose.connect(DATABASE_URL);
        console.log("Connected Successfully...");
    } catch(err){
        console.log(err);
    }
}

export default connectDB;