const router = require('express').Router();
const newsAPI = require('newsapi');
const dotenv = require('dotenv').config();

const newsapi = new newsAPI(process.env.NewsApiKey);

router.get('/', (req, res, next) => {
    newsapi.v2.topHeadlines({
        sources: 'bbc-news',
    }).then(response => {
        res.json({
            response: response
        });
    });
});

module.exports = router;