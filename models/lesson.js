const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Lesson = new Schema(
  {
    title: { type: String, required: true },
    subject: { type: String, required: true },
    gradeLevel: { type: String, required: true },
    description: { type: String, required: true }
  },
)

module.exports = mongoose.model('lessons', Lesson)