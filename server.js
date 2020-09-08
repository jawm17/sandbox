const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const router = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 8080;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(router);

// Connect to the Mongo DB
if (process.env.NODE_ENV === "production") {
  mongoose.connect("mongodb://localhost/BADBITCH", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
} else {
  mongoose.connect("mongodb://localhost/BADBITCH", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
}

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
