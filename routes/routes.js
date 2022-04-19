const routes = require('express').Router();
const mainController = require('../controllers/mainController');

routes.get('/', mainController.showHome);
routes.get('/home', mainController.showHome);

module.exports = routes;