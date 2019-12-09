import React, { useState, useEffect } from "react";
import axios from "axios";

const EditNote = props => {
	const [note, setNote] = useState({ title: "", description: "" });
	const idParam = props.match.params.id;

	useEffect(() => {
		async function getNoteFromApi() {
			try {
				const res = await axios.get(`http://localhost:5000/notes/${idParam}`);
				setNote(res.data);
			} catch (error) {}
		}
		getNoteFromApi();
	}, [idParam]);

	const handleChange = e => {
		setNote({ ...note, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await axios.put(`http://localhost:5000/notes/${note._id}`, note);
			props.history.push("/");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<h2>Edit Note</h2>
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
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Edit
				</button>
			</form>
		</div>
	);
};

export default EditNote;
