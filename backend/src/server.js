import express, { response } from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// used for passing in values with the request 
app.use(express.json());
app.use(rateLimiter);
app.use(cors)

///////////////////////////////
// OPTIONAL 
// custom middleware
app.use((req, res, next) => {
    // currently just print out the reqest method and request url
    console.log(`Request method ${req.method} & Request URL ${req.url}`)
    next();
    // with middlewares like app.use .post .get .. if you don't end the function with a reposnse you NEED to end the function
    // with a next(); it's a way of telling express, that the function is done running and move on to the next router
    // some methods automatically calls the next(), so we don't havet to
});

// if the server request starts with /api/notes/ hit the notesRoutes file
app.use("/api/notes", notesRoutes);

// make is so that, Only when the database connection with mongoDB is established, 
// start the app on port 5001
connectDB().then( () => {
    app.listen(PORT, ()=>{
        console.log("Server started on PORT 5001");
    }); 
});


