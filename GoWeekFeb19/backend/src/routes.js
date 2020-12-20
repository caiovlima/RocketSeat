const express = require('express');
const routes = express.Router();

const  TweetController = require('./controllers/TweetController');
const LikeController = require("./controllers/LikeController");



routes.get('/tweets', TweetController.index);
routes.get('/tweet/:id', TweetController.show);
routes.post('/tweets', TweetController.store);
routes.put('/tweet/:id', TweetController.update);
routes.delete('/tweet/:id', TweetController.destroy);

routes.post('/likes/:id', LikeController.store);
module.exports = routes;