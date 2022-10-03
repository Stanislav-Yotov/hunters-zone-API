const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.js');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

const PORT = process.env.PORT || 8000;



app.use(bodyParser.json());

app.options('*', cors());
app.use(cors());

app.use('/auth', authRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});


mongoose.connect(MONGODB_URI)
    .then(result => {
        app.listen(PORT)
        console.log('connected to DB');
    })
    .catch(err => {
        console.log(err);
    });


