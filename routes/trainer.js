const express = require('express');
const { createTrainer } = require('../controllers/trainer');

const router = express.Router();

router.post('/', createTrainer);

// Define other routes for CRUD operations (GET, PUT, DELETE)

module.exports = router;
