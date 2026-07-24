import express, { response } from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

// if the server request starts with /api/notes/ hit the notesRoutes file
app.use("/api/notes", notesRoutes);


app.listen(5001, ()=>{
    console.log("Server started on PORT 5001");
});