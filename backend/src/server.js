import express, { response } from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// if the server request starts with /api/notes/ hit the notesRoutes file
app.use("/api/notes", notesRoutes);

connectDB();


app.listen(5001, ()=>{
    console.log("Server started on PORT 5001");
});

