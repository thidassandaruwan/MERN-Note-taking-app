import express, { response } from "express";

const app = express();

app.get("/api/notes", (req, res) => {
    res.status(200).send("You've got 25 notes!");
});

app.listen(5001, ()=>{
    console.log("Server started on PORT 5001");
});