const mongoose = require("mongoose");
const config = require("config");
const mongooseURI = config.get("mongooseURI");

const connectDB = async () => {
	try {
		await mongoose.connect(mongooseURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log("Connected!");
	} catch (err) {
		console.log(err.error);
	}
};

module.exports = connectDB;
