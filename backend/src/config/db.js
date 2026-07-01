import mongoose from "mongoose";

export const connectDB = async () =>{
    try
    {  
        const MONGO_URI = process.env.MONGO_URI;                                                                                             // database name here
        await mongoose.connect(MONGO_URI);
        
        // print confirmation
        console.log("MONGODB connected");
    }
    catch (error)
    {
        console.error("error connecting to MONGODB" , error);
        process.exit(1);
    }
}