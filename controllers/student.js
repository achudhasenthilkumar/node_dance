const { Student, User } = require('../models');

exports.createStudent = async (req, res) => {
  try {
    const user = await User.create(req.body.user);
    const student = await Student.create({
      ...req.body.student,
      UserId: user.id
    });
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getStudent = async (req, res) => {
    try {
      const student = await Student.findOne({
        where: { id: req.params.id },
        include: [User]
      });
      res.status(201).json(student);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

// Implement other CRUD operations here (getStudent, updateStudent, deleteStudent)
