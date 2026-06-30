import express, { response } from "express"

const app = express()

app.get("/api/notes", (request, response)=>{
    response.send("You got 5 notes");
});

app.listen(3000, ()=>{
    console.log("Server started on PORT: 3000")
})