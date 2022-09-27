const mongoose = require("mongoose");

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.ATLAS);
		console.log("Database conectada");
	} catch (error) {
		console.log(error);
	}
};

module.exports = dbConnection;
