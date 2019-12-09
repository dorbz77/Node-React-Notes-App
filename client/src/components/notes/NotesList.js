import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteItem from "./NoteItem";

const NotesList = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		async function getNotesFromApi() {
			try {
				const res = await axios.get("http://localhost:5000/notes");
				setNotes(res.data);
			} catch (error) {
				console.log(error);
			}
		}
		getNotesFromApi();
	}, [notes]);

	return (
		<div>
			<h2>Your Notes</h2>
			<div className="row">
				{notes.map(note => {
					return <NoteItem key={note._id} note={note} />;
				})}
			</div>
		</div>
	);
};

export default NotesList;
