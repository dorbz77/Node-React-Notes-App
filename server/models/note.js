const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String
	}
});

const Note = mongoose.model("note", noteSchema);

module.exports.Note = Note;
