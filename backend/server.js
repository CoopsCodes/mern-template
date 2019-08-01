const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mongo and Mongoose connections to DataBase
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established");
});

// Routes
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

// app.use indicated when a user searches for the /exercises the application will do whatever is in the exercisesRouter
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

// Server port
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
