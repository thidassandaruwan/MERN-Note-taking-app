export function getAllNotes(request, response){
    response.status(200).send("You got 100 notes");
}

export function createNote(request, response){
    response.status(201).send("Note created successfully");
}

export function updateNote(request, response){
    response.status(200).send("Note updated successfully");
}

export function deleteNote(request, response){
    response.status(200).send("Note deleted successfully");
}