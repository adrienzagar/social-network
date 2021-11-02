/* eslint-disable no-undef */
const express = require("express");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
require("dotenv").config({path : "./config/.env"});
require("./config/db");
const {checkUser} = require("./middleware/auth.middleware");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//jwt
app.get("*", checkUser);

//routes
app.use("/api/user", userRoutes);
// server
app.listen(process.env.PORT, () => {
	console.log(`listening port ${process.env.PORT}`);
});