const express = require('express');
const { createStudent, getStudent } = require('../controllers/student');

const router = express.Router();

router.post('/', createStudent);
router.get('/:id', getStudent)

// Define other routes for CRUD operations (GET, PUT, DELETE)

module.exports = router;
