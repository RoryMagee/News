const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const http = require('http');
const morgan = require('morgan');
const config = require('./config.js');

const app = express();

//app.use(express.static('dist/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors());

app.set('port', config.port);

//declare routes here
const mainRoutes = require('./Routes/main');
app.use('/api', mainRoutes);

var server = http.createServer(app);

app.listen(config.port, (err) => {
    console.log("Server listening on port " + config.port);
})
