const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");

// DB connection
connectDB();

/* Middlewares */
app.use(express.json());
app.use(cors());

/* Routes */
const notes = require("./routes/notes");
app.use("/notes", notes);

app.use("/", (req, res) => {
	res.send("Hello!");
});

/* Live */
const port = process.env.port || 5000;
app.listen(port, () => {
	console.log(`Live on port ${port}`);
});
