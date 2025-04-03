const express = require('express');
const router = express.Router();
const { getCourse } = require('./controller');

router.get('/:course_name', getCourse);

module.exports = router;
