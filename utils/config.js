require("dotenv").config();

// Exporting values from .env file
const PORT = process.env.PORT;
const EMAIL_ID = process.env.EMAIL_ID;
const APP_PASSWORD = process.env.APP_PASSWORD;

// Exporting the variables for access across the application
module.exports = { PORT, EMAIL_ID, APP_PASSWORD };
