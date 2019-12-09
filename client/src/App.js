import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import NotesList from "./components/notes/NotesList";
import AddNote from "./components/notes/AddNote";
import NotePage from "./components/notes/NotePage";
import EditNote from "./components/notes/EditNote";

function App() {
	return (
		<Router>
			<div className="notes-app">
				<Navigation />
				<div className="container mt-4">
					<Switch>
						<Route path="/" exact component={NotesList} />
						<Route path="/add" component={AddNote} />
						<Route path="/note/:id" component={NotePage} />
						<Route path="/edit/:id" component={EditNote} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
