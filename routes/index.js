var express = require('express');
const res  = require('express/lib/response')
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

router.post('/register', (req, res) => {
  return res.send('os dados do formulário foram enviados')
});

module.exports = router;
