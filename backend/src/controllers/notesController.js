import Note from "../models/Note.js"


export async function getAllNotes(req, res) {
  try {
    console.log("➡️ getAllNotes route hit");

    const notes = await Note.find().sort({ _id: -1 });

    console.log("📦 Notes fetched:", notes); // Optional logging
    res.status(200).json(notes);             // ✅ Make sure this line is here
  } catch (error) {
    console.error("❌ ERROR in getAllNotes controller:", error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
}


export async function getNoteById(req, res) {
  try {
    const noteId = req.params.id;

    const note = await Note.findById(noteId);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createNote (req,res){
    try{

    const {title,content}=req.body;
    console.log("Saving note:", { title, content });

    const newNote=new Note({title,content});
    const savedNote =await newNote.save();
    res.status(201).json(savedNote);
    }catch(error)
    {   console.error("Error in createnote controller",error);
        res.status(500).json({message:"INTERNAL SERVER ERROR"});

    }
    
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true } 
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      message: "Note updated successfully",
      updatedNote,
    });
  } catch (error) {
    console.error("Error in update controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      message: "Note deleted successfully",
      deletedNote,
    });
  } catch (error) {
    console.error("Error in delete controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
