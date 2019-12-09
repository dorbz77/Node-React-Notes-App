import React, { useState } from "react";
import axios from "axios";

const AddNote = props => {
	const [note, setNote] = useState({ title: "", description: "" });

	const handleChange = e => {
		setNote({ ...note, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const res = await axios.post("http://localhost:5000/notes", note);
			props.history.push(`/note/${res.data._id}`);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<h2>Add Note</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						name="title"
						className="form-control"
						id="title"
						onChange={handleChange}
						value={note.title}
						placeholder="Title..."
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input
						type="text"
						name="description"
						className="form-control"
						id="v"
						onChange={handleChange}
						value={note.description}
						placeholder="Description..."
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Add
				</button>
			</form>
		</div>
	);
};

export default AddNote;
