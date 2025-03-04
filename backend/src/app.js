import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app=express();
dotenv.config();

let port = process.env.PORT || 8080;

// MongoDB Connection (Ensure MONGO_URI is in your .env file)
mongoose.connect(process.env.MONGO_URL, {

})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));


//app listening
app.listen(port,()=>{
    console.log(`app listening to port ${port}`);
});

