const express = require("express");

const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT //||8080;
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
// app.use(routes);


// ----------------------------------------------------------------------------------------------------------------
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
// const stripe = require('stripe')(process.env.STRIPE_SECRET);

// (async () => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [{
//       name: 'Rent',
//       description: 'Monthly Rent',
//       amount: 1500,
//       currency: 'usd',
//       quantity: 1,
//     }],
//     success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
//     cancel_url: 'https://example.com/cancel',
//   });
// })();
// ----------------------------------------------------------------------------------------------------------------


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/propmanagedb", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
// Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
