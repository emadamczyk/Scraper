const mongoose = require("mongoose");

// Saving a reference to the Schema constructor
const Schema = mongoose.Schema;

// Creating a new NoteSchema object
const NoteSchema = new Schema({
  title: String,
    body: String
});

// Creating a  model from the above schema, using mongoose's model method
const Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;
