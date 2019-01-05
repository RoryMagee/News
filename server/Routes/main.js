const router = require('express').Router();
const newsAPI = require('newsapi');
const dotenv = require('dotenv').config();
const queryString = require('querystring');

const newsapi = new newsAPI(process.env.NewsApiKey);

router.get('/', (req, res, next) => {
    newsapi.v2.topHeadlines({
        country: 'gb'
    }).then(response => {
        //let articleAmnt = Object.keys(response.articles).length;
        //for(x = 0; x < articleAmnt; x++) {
        for(x = 0; x < response.articles.length; x++) {
            if(!response.articles[x].urlToImage) {
                response.articles.splice(x,1);
                console.log('image deleted');
            }
            var content = JSON.stringify(response.articles[x].content);
            content = content.replace(content.substring(0,1), '');
            for(y = content.length; y > 0; y--) {
                if(content.charAt(y) === '[') {
                    response.articles[x].content = content.replace(content.substring(y, content.length), '');
                }
            }
        }
        res.json({
            response: response
        });
    });
});

router.get('/search/:q', (req, res, next) => {
    newsapi.v2.everything({
        q: decodeURIComponent(req.params.q),
        sortBy: 'relevancy'
    }).then(response => {
        for(x = 0; x < response.articles.length; x++) {
            if(!response.articles[x].urlToImage) {
                response.articles.splice(x,1);
                console.log('image deleted');
            }
            var content = JSON.stringify(response.articles[x].content);
            content = content.replace(content.substring(0,1), '');
            for(y = content.length; y > 0; y--) {
                if(content.charAt(y) === '[') {
                    content = content.replace(content.substring(y, content.length), '');
                    response.articles[x].content = content;
                }
            }
        }
        res.json({
            response: response
        });
    });
});

router.get('/:category', (req, res, next) => {
    newsapi.v2.topHeadlines({
        category: req.params.category,
        country: 'gb'
    }).then(response => {
        for(x = 0; x < response.articles.length; x++) {
            if(!response.articles[x].urlToImage) {
                response.articles.splice(x,1);
                console.log('image deleted');
            }
            var content = JSON.stringify(response.articles[x].content);
            content = content.replace(content.substring(0, 1), '');
            for(y = content.length; y > 0; y--) {
                if(content.charAt(y) === '[') {
                    var ret = content.replace(content.substring(y, content.length), '');
                    response.articles[x].content = ret;
                }
            }
        }
        res.json({
            response: response
        });
    });
});



module.exports = router;