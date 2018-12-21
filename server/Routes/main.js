const router = require('express').Router();
const newsAPI = require('newsapi');
const dotenv = require('dotenv').config();

const newsapi = new newsAPI(process.env.NewsApiKey);

router.get('/', (req, res, next) => {
    newsapi.v2.topHeadlines({
        country: 'gb'
    }).then(response => {
        let articleAmnt = Object.keys(response.articles).length;
        for(x = 0; x < articleAmnt; x++) {
            var content = JSON.stringify(response.articles[x].content);
            content = content.replace(content.substring(0,1), '');
            for(y = content.length; y > 0; y--) {
                if(content.charAt(y)=== '[') {
                    //var ret = content.replace(content.substring(y, content.length), '');
                    response.articles[x].content = content.replace(content.substring(y, content.length), '');
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
        let articleAmnt = Object.keys(response.articles).length;
        for(x = 0; x < articleAmnt; x++) {
            var content = JSON.stringify(response.articles[x].content);
            for(y = content.length; y > 0; y--) {
                if(content.charAt(y)=== '[') {
                    var ret = content.replace(content.substring(y, content.length), '');
                    response.articles[x].content = ret;
                }
            }
        }
        for(let x = 0; x < 20; x++) {
            if(response.articles[x].source.id === 'null') {
                console.log("null source");
                delete response.articles[x];
            }
        }
        res.json({
            response: response
        });
    });
});

// router.get('/entertainment', (req, res, next) => {
//     newsapi.v2.topHeadlines({
//         category: 'entertainment',
//         country: 'gb'
//     }).then(response => {
//         let articleAmnt = Object.keys(response.articles).length;
//         for(x = 0; x < articleAmnt; x++) {
//             var content = JSON.stringify(response.articles[x].content);
//             for(y = content.length; y > 0; y--) {
//                 if(content.charAt(y)=== '[') {
//                     var ret = content.replace(content.substring(y, content.length), '');
//                     response.articles[x].content = ret;
//                 }
//             }
//         }
//         res.json({
//             response: response
//         });
//     });
// });

// router.get('/sport', (req, res, next) => {
//     newsapi.v2.topHeadlines({
//         category: 'sport',
//         country: 'gb'
//     }).then(response => {
//         let articleAmnt = Object.keys(response.articles).length;
//         for(x = 0; x < articleAmnt; x++) {
//             var content = JSON.stringify(response.articles[x].content);
//             for(y = content.length; y > 0; y--) {
//                 if(content.charAt(y)=== '[') {
//                     var ret = content.replace(content.substring(y, content.length), '');
//                     response.articles[x].content = ret;
//                 }
//             }
//         }
//         res.json({
//             response: response
//         });
//     });
// });

// router.get('/politics', (req, res, next) => {
//     newsapi.v2.topHeadlines({
//         category: 'politics',
//         country: 'gb'
//     }).then(response => {
//         let articleAmnt = Object.keys(response.articles).length;
//         for(x = 0; x < articleAmnt; x++) {
//             var content = JSON.stringify(response.articles[x].content);
//             for(y = content.length; y > 0; y--) {
//                 if(content.charAt(y)=== '[') {
//                     var ret = content.replace(content.substring(y, content.length), '');
//                     response.articles[x].content = ret;
//                 }
//             }
//         }
//         res.json({
//             response: response
//         });
//     });
// });

// router.get('/science', (req, res, next) => {
//     newsapi.v2.topHeadlines({
//         category: 'science',
//         country: 'gb'
//     }).then(response => {
//         let articleAmnt = Object.keys(response.articles).length;
//         for(x = 0; x < articleAmnt; x++) {
//             var content = JSON.stringify(response.articles[x].content);
//             for(y = content.length; y > 0; y--) {
//                 if(content.charAt(y)=== '[') {
//                     var ret = content.replace(content.substring(y, content.length), '');
//                     response.articles[x].content = ret;
//                 }
//             }
//         }
//         res.json({
//             response: response
//         });
//     });
// });

module.exports = router;