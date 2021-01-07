require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");



const app = express();

const PORT = process.env.PORT || 9007;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });
// const MONGODB_URI = 'mongodb+srv://ManNeu:Nepal123@cluster0.0etvo.mongodb.net/workout'

// mongoose.connect(MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

//connecting mongoDB through Mongoose
// mongoose.connect(process.env.MongoDB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

