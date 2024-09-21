// Importing the express library
const express = require("express");

// Importing the morgan library to log requests
const morgan = require("morgan");

// Importing the cors library to enable cross-origin requests
const cors = require("cors");

// Creating an express application
const app = express();

// Importing the routes for users and todos
const router = require("./routes/route");

app.use(
  cors({
    origin: "https://sathyanarayanan-v.netlify.app",
    credentials: true,
  })
);

// Adding middleware to parse the request body
app.use(express.json());

// to log requests
app.use(morgan("dev"));

// Creating routes
app.use("/api/v1/", router);

// Export the express app
module.exports = app;
