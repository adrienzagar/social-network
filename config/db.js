const mongoose = require("mongoose")

mongoose
    .connect("mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.gmhqj.mongodb.net/test",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect", err))