const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.js');
const mongoose = require('mongoose');



const app = express();

const PORT = process.env.PORT || 8000;



app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
    next();
});

app.use('/auth', authRoutes);




mongoose.connect(MONGODB_URI)
    .then(result => {
        app.listen(PORT)
        console.log('connected to DB');
    })
    .catch(err => {
        console.log(err);
    });


