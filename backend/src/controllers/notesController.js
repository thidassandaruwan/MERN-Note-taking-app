
// converting the entire routes into functions

// router.get("/", (req, res) => {
//     res.status(200).send("You've got 10 notes!");
// });
import Note from "../model/Note.js";

export async function getAllNotes(req, res){
    try {
        // fetching all notes
        const notes = await Note.find();

        // if no notes found
        if (notes.length == 0){res.status(200).json({message : "No Notes Found!"});}

        res.status(200).json(notes);
    } 
    catch (error) {
        console.error("Error ! : " + error)
        res.status(500).json({message : "Internal Server Error!"})
    }
};

export async function createNote(req, res){
    try {
        const {title, content} = req.body;
        // since the Keys for title, and content are also "title", "content"
        // we can skip the {title:title, contenet:content}
        // and just put {title, content}
        const newNote = new Note({title, content});  
        
        await newNote.save();
        res.status(201).json({message:"Note Created Successfully!"});
    } 
    catch (error) {
        console.error("Error ! : " + error)
        res.status(500).json({message : "Internal Server Error!"})
    }
}

export async function updateNote(req, res){
                    // response is sent in json format
    res.status(200).json({message:"Note updated successfully!"});
}

export async function deleteNote(req, res){
                    // response is sent in json format
    res.status(200).json({message:"Note deleted successfully!"});
}