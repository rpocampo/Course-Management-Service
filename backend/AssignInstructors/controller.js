const assignInstructor = (req, res) => {
    const courseId = req.params.id;
    const { instructorName } = req.body;

    if (!instructorName) {
        return res.status(400).json({ message: "Instructor name is required" });
    }

    // Here you would typically update the database
    res.status(200).json({
        message: `Instructor ${instructorName} assigned to course ${courseId}`,
    });
};

module.exports = { assignInstructor };
    