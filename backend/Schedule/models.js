
const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    course_ID: { type: Number, required: true },
    day: { type: String, required: true },
    time: { type: String, required: true },
    room: { type: Number, required: true }
});

module.exports = mongoose.model('schedule', scheduleSchema);