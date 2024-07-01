const { Role } = require('../models');

exports.createRole = async (req, res) => {
  try {
    const role = await Role.create(req.body.role);
    res.status(201).json(role);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Implement other CRUD operations here (getStudent, updateStudent, deleteStudent)
