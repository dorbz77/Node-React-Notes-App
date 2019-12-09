import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NotePage = props => {
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

	const handleDelete = id => {
		async function deleteNote() {
			try {
				await axios.delete(`http://localhost:5000/notes/${id}`);
				props.history.push("/");
			} catch (error) {
				console.log(error);
			}
		}
		deleteNote();
	};

	return (
		<div>
			{(note.title || note.description) && (
				<Fragment>
					<h2>{note.title}</h2>
					<p>{note.description}</p>
					<div className="btn-toolbar">
						<Link className="btn btn-primary mr-1" to={`/edit/${note._id}`}>
							Edit
						</Link>
						<button
							className="btn btn-danger"
							onClick={() => handleDelete(note._id)}
						>
							Delete
						</button>
					</div>
				</Fragment>
			)}
		</div>
	);
};

export default NotePage;
