const express = require('express');
const { courses } = require('./controller')

const router = express.Router();

// POST endpoint to handle data
router.post('/add', schedule);

module.exports = router;