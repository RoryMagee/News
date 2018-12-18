const router = require('express').Router();
const newsAPI = require('newsapi');
const dotenv = require('dotenv').config();

const newsapi = new newsAPI(process.env.NewsApiKey);

router.get('/', (req, res, next) => {
    newsapi.v2.topHeadlines({
        country: 'gb'
    }).then(response => {
        res.json({
            response: response
        });
    });
});

router.get('/business', (req, res, next) => {
    newsapi.v2.topHeadlines({
        category: 'business',
        country: 'gb'
    }).then(response => {
        res.json({
            response: response
        });
    });
});

router.get('/entertainment', (req, res, next) => {
    newsapi.v2.topHeadlines({
        category: 'entertainment',
        country: 'gb'
    }).then(response => {
        res.json({
            response: response
        });
    });
});

router.get('/sport', (req, res, next) => {
    newsapi.v2.topHeadlines({
        category: 'sport',
        country: 'gb'
    }).then(response => {
        res.json({
            response: response
        });
    });
});

router.get('/politics', (req, res, next) => {
    newsapi.v2.topHeadlines({
        category: 'politics',
        country: 'gb'
    }).then(response => {
        res.json({
            response: response
        });
    });
});

router.get('/science', (req, res, next) => {
    newsapi.v2.topHeadlines({
        category: 'science',
        country: 'gb'
    }).then(response => {
        res.json({
            response: response
        });
    });
});

module.exports = router;