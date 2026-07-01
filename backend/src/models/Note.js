import mongoose from "mongoose";

// first create a schema
const noteSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
    },
    {timestamps:true} // automatically modified date field
)

// create a model based off of that schema