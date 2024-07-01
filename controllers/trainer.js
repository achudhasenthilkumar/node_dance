const { Trainer, User } = require('../models');

exports.createTrainer = async (req, res) => {
  try {
    const user = await User.create(req.body.user);
    const trainer = await Trainer.create({
      ...req.body.trainer,
      UserId: user.id
    });
    res.status(201).json(trainer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Implement other CRUD operations here (getTrainer, updateTrainer, deleteTrainer)
