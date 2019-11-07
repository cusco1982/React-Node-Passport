const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
require('dotenv').config();
const passport = require('passport')


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// app.use('/upload', router);

// ----------------------------------------------------------------------------------------------------------------



// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/propmanagedb", {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err));
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/propmanagedb", {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log("Mongo connected")
  console.log("ENV")
  console.log(process.env.MONGODB_URI)
}).catch(err => console.log(err));

    
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
