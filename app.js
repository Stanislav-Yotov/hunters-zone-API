const express = require('express');
const bodyParser = require('body-parser');
const articleRoutes = require('./routes/articles.js');



const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
    next();
});

// app.use((req, res, next) => {
//     res.send('Helo World');
//     next();
// })

app.use('/articles', articleRoutes);






app.listen(8000)
