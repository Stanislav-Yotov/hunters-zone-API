const express = require('express');
const bodyParser = require('body-parser');
const articleRoutes = require('./routes/articles.js');
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

app.use('/articles', articleRoutes);




mongoose.connect(MONGODB_URI)
    .then(result => {
        app.listen(PORT)
        console.log('connected to DB');
    })
    .catch(err => {
        console.log(err);
    });


