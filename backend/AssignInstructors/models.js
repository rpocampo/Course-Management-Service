const mongoose = require('mongoose');

// Define Course Schema
const CourseSchema = new mongoose.Schema({
    courseId: { type: String, required: true, unique: true },
    instructorName: { type: String, required: true },
});

// Create Course Model
const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;