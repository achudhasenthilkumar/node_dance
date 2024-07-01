const express = require('express');
const { createRole } = require('../controllers/roles');

const router = express.Router();

router.post('/', createRole);

// Define other routes for CRUD operations (GET, PUT, DELETE)

module.exports = router;
