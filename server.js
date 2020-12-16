require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");



const app = express();

const PORT = process.env.PORT || 8088;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

//connecting mongoDB through Mongoose
mongoose.connect(process.env.Mongo_URI, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
