const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    imgURL: { type: String, required: false },
    state: { type: String, required: true },
    district: { type: String, required: true },
    gradeLevel: { type: String, required: true },
    subjects: { type: Array, required: true }, // put array braces around the object,,,still defined as a String
    // lessons: [{ type: Schema.Types.ObjectId, ref: "lessons" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
