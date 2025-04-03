const express = require('express');
const { assignInstructor } = require('./controller');
const app = express();

const router = express.Router();

router.post('/:id/assign-professor', assignInstructor);

module.exports = router;    
