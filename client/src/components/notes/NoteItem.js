import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NoteItem = ({ note }) => {
	const handleDelete = id => {
		async function deleteNote() {
			try {
				await axios.delete(`http://localhost:5000/notes/${id}`);
			} catch (error) {
				console.log(error);
			}
		}
		deleteNote();
	};
	return (
		<div className="card col-12 col-md-3 m-3">
			<div className="card-body">
				<h4 className="card-title">
					<Link to={`/note/${note._id}`}>{note.title}</Link>
				</h4>
				<hr />
				<p className="card-text">{note.description}</p>
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
			</div>
		</div>
	);
};

export default NoteItem;
