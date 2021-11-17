const mongoose = require("mongoose");

mongoose
	.connect("mongodb+srv://" + process.env.DB_USER_PASS + process.env.CLUSTER,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}s
	)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log("Failed to connect", err));