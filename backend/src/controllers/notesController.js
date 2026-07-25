
// converting the entire routes into functions

// router.get("/", (req, res) => {
//     res.status(200).send("You've got 10 notes!");
// });

export function getAllNotes(req, res){
    res.status(200).send("You've got 10 notes!");
};

export function createNote(req, res){
                    // response is sent in json format
    res.status(201).json({message:"Note created successfully!"});
    // 201 is http status code for Successfull creation
}

export function updateNote(req, res){
                    // response is sent in json format
    res.status(200).json({message:"Note updated successfully!"});
}

export function deleteNote(req, res){
                    // response is sent in json format
    res.status(200).json({message:"Note deleted successfully!"});
}