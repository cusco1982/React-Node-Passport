const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const unitSchema = new Schema({
  city: { type: String, required: true },
  zip: { type: String, required: true },
  price: { type: String, required: true },
  rooms: { type: String, required: true },
  sqFeet: { type: String, required: true },
 
});

const Unit = mongoose.model("Unit", unitSchema);

module.exports = Unit;