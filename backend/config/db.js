import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://fooddelapp:662100@cluster0.kpocswr.mongodb.net/food-del').then(()=>console.log("DB Connected Successfully !"));
}