class Course {
    static courses = [
        { course_name: "Computer Science 101", description: "Introduction to Computer Science", credits: 3 },
        { course_name: "Mathematics 201", description: "Advanced Calculus and Algebra", credits: 4 },
        { course_name: "Physics 101", description: "Fundamentals of Physics", credits: 3 },
        { course_name: "Business Management 301", description: "Principles of Business Management", credits: 3 }
    ];

    static findByName(courseName) {
        return this.courses.find(c => c.course_name.toLowerCase() === courseName);
    }
}

module.exports = Course;