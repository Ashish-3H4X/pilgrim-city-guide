import mongoose from "mongoose";

const TempleSchema = new mongoose.Schema({
  name: String,
  city: String,
  description: String,
  openingTime: String,
  closingTime: String,
  aartiTiming: String,
  rules: String,
  location: String
});

const Temple = mongoose.model("Temple", TempleSchema);

export default Temple;