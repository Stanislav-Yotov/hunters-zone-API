const express = require('express');
const articlesController = require('../controllers/articles.js');

const router = express.Router();

router.get('/article', articlesController.getArticles);


module.exports = router;