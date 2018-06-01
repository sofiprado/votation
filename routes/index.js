var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

const homeController = require('../controllers/homeController.js')

const clickController = require('../controllers/clickController.js')

router.get('/home', homeController.home) 

router.put('/home', clickController.update)


module.exports = router;


