const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const studentRoutes = require('./routes/student');
const trainerRoutes = require('./routes/trainer');
const roleRoutes = require('./routes/role');

app.use('/api/students', studentRoutes);
app.use('/api/trainers', trainerRoutes);
app.use('/api/roles', roleRoutes);

sequelize.sync()
    .then(() => {
        console.log('Database synced');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.log('Error syncing database', err));

module.exports = app;


