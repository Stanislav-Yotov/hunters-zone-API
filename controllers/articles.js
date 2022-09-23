exports.getArticles = (req, res, next) => {
    res.status(200).json({
        articles: [{
            title: 'test',
            body: 'body test'
        }]
    });
};