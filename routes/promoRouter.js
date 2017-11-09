const express = require('express');
const bodyparser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyparser.json());

promoRouter.route('/')
.all(function(req, res, next){
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    next();
})
.get(function(req, res, next){
    res.end(`Will send the promotions to you!`);
})
.post(function(req, res, next){
    res.end(`Will add the new promotion: ${req.body.promoName} with details ${req.body.promoDetails}`);
})
.put(function(req, res, next){
    res.statusCode = 403;
    res.end(`Put operations not supported on /promotions`);
})
.delete(function(req, res, next){
    res.end(`Deleting all the dishes`);
})

promoRouter.route('/:promoId')
.all(function(req, res, next){
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    next();
})
.get(function(req, res, next){
    res.end(`Will send the details of the promo ${req.params.promoId} to you`);
})
.post(function(req, res, next){
    res.statusCode = 403;
    res.end(`Post operation not supported on /promotions/${req.params.promoId}`);
})
.put(function(req, res, next){
    res.write(`updating the promotion: ${req.params.promoId} \n`);
    res.end(`Will update the promo ${req.body.promoName} with details ${req.body.promoDetails}`);
})
.delete(function(req, res, next){
    res.end(`Deleting the promo ${req.params.promoId}`);
});

module.exports = promoRouter;