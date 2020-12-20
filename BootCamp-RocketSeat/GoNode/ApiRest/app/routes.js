const express = require('express');
const routes = express.Router();
const requireDir = require('require-dir');

const authMiddleware = require('./middlewares/auth.js');

//usar o require dir para que todas as controllers sejam reconhecidas
//por ele
const controllers = requireDir('controllers');

routes.post('/signup', controllers.authController.signup);
routes.post('/signin', controllers.authController.signin);

/* ROTAS A SEREM AUTENTICADAS*/

routes.use(authMiddleware);

//rotas do tweet
routes.post('/tweets', controllers.tweetController.create);
routes.delete('/tweets/:id', controllers.tweetController.destroy);


//rotas user
routes.put('/users', controllers.userController.update);
routes.get('/users/me', controllers.userController.me);
routes.get('/feed', controllers.userController.feed);

//rotas follow
routes.post('/follow/:id', controllers.followController.create);
routes.delete('/unfollow/:id', controllers.followController.destroy);

//likes routes
routes.post('/like/:id', controllers.likeController.toggle);
module.exports = routes;