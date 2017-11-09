const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all(function(req, res, next){
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    next();
})
.get(function(req, res, next){
    res.end(`Will reveal leaders to you!`);
})
.post(function(req, res, next){
    res.end(`Will add the new leader: ${req.body.leaderName} with details ${req.body.leaderDetails}`);
})
.put(function(req, res, next){
    res.statusCode = 403;
    res.end(`Put operations not supported on /leaders`);
})
.delete(function(req, res, next){
    res.end(`Deleting all leaders`);
})

leaderRouter.route('/:leaderId')
.all(function(req, res, next){
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    next();
})
.get(function(req, res, next){
    res.end(`Will send the details of the leader ${req.params.leaderId} to you`);
})
.post(function(req, res, next){
    res.statusCode = 403;
    res.end(`Post operation not supported on /leaders/${req.params.leaderId}`);
})
.put(function(req, res, next){
    res.write(`updating the leader: ${req.params.leaderId} \n`);
    res.end(`Will update the leader ${req.body.leaderName} with details ${req.body.leaderDetails}`);
})
.delete(function(req, res, next){
    res.end(`Deleting the promo ${req.params.leaderId}`);
});

module.exports = leaderRouter;