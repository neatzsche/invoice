var express = require('express');
var router = express.Router();

/* GET home page. */
const flag = "flag{ssRf-thrU-d@-PDF-0K-Bas3d}"
router.get('/', function(req, res, next) {
  var remote = req.ip || req.connection.remoteAddress
  console.log(remote);
	if ((remote === '::1') || (remote === 'localhost') || (remote ==='::ffff:127.0.0.1')){
    res.send(flag);
  }else{
    res.send("Only available locally")
  }
		
});

module.exports = router;