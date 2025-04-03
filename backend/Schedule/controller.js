const schedule = require('./models');


const schedule = async (req, res) => {
    try {
        const { course_id, day, time, room } = req.body;

        if (!course_id || !day || !time || !room) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        const schedule = new Course({ course_id, day, time, room });
        await schedule.save();

        res.status(201).json({
            message: 'data stored successfully',
            data: schedule
        });

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

module.exports = { schedule };