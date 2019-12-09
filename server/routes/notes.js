const express = require("express");
const router = express.Router();
const { Note } = require("../models/note");

router.get("/", async (req, res) => {
	const notes = await Note.find();
	res.send(notes);
});

router.get("/:id", async (req, res) => {
	const note = await Note.findById(req.params.id);
	if (!note) return res.status(404).send("Not Found!");
	res.send(note);
});

router.post("/", async (req, res) => {
	let { title, description } = req.body;
	if (!(title && description)) return res.status(400).send("Error!");
	let newNote = new Note({ title, description });
	newNote = await newNote.save(newNote);
	res.send(newNote);
});

router.put("/:id", async (req, res) => {
	const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	});
	if (!note) return res.status(404).send("Error!");
	res.send(note);
});

router.delete("/:id", async (req, res) => {
	const note = await Note.findByIdAndRemove(req.params.id);
	if (!note) return res.status(404).send("Error!");
	res.send(note);
});

module.exports = router;
