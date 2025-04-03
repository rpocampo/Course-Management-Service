const courses = [
    { course_name: "subject 1", description: "description 1", credits: 3 },
    { course_name: "subject 2", description: "description 2", credits: 4 },
    { course_name: "subject 3", description: "description 3", credits: 3 },
    { course_name: "subject 4", description: "description 4", credits: 3 }
];

const getCourse = (req, res) => {
    const courseName = req.params.course_name.toLowerCase();
    const course = courses.find(c => c.course_name.toLowerCase() === courseName);
    
    if (course) {
        res.json(course);
    } else {
        res.status(404).json({ message: "Course not found" });
    }
};

module.exports = { getCourse };