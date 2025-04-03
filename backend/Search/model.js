const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    name: String,
    description: String,
    credits: Number,
});

module.exports = mongoose.model("Course", CourseSchema);