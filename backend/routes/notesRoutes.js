import express from "express";

const router = express.Router(); 

router.get("/", (req, res) => {
    res.status(200).send("You've got 10 notes!");
});

router.post("/", (req, res) => {
                    // response is sent in json format
    res.status(201).json({message:"Note created successfully!"});
});             // 201 is http status code for Successfull creation

                // id here would be the id of the note the client want to UPDATE, when client sends a update requests, the program would fetch the note id and send it with the endpoint
router.put("/:id", (req, res) => {
                    // response is sent in json format
    res.status(200).json({message:"Note updated successfully!"});
});

router.delete("/:id", (req, res) => {
                    // response is sent in json format
    res.status(200).json({message:"Note deleted successfully!"});
});


export default router;
// ======================================================NOTES===========================================================================
// Endpoint?
// An endpoint is a combination of URL + HTTP method (get, post, put, patch, delete) that lets client interacts with a specific resource

// from the below route, 
// get("/api/notes"
// this would be the endpoint

// this entire thing is called a route
// app.get("/api/notes", (req, res) => {
//     res.status(200).send("You've got 25 notes!");
// });
// =======================================================================================================================================
