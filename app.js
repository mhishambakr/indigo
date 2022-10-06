const express = require('express');

const app = express();

const PORT = 5000;

const { sequelize } = require('./src/index')

sequelize.sync({ alter: true }).catch(err => console.log(err))

const routerV1 = require('./src/router.v1')

app.get('/', (req, res) => {
    res.send('<h1>Indigo app running</h1>')
})

routerV1(app, '/api/v1')

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
})