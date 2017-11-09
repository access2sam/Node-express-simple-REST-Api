const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, function(){
    console.log(`Server is running on port ${port}`);
});
