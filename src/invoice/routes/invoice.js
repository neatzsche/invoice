var express = require('express');
var router = express.Router();
var wkhtmltopdf = require('wkhtmltopdf');


/* GET users listing. */
router.post('/', function(req, res, next) {
    var name = req.body.name;
    var amount = parseInt(req.body.amount);
    var description = req.body.description;
    if (name.length >30){
        res.send('Name cannot be longer than 30');
    } 
    else if(description.includes('127.') || description.includes('localhost') || description.includes('[::]')){
        res.send('Illegal character in description')
    }
    else{
        wkhtmltopdf(`<h1>${name}'s invoice request</h1><p>$${amount}</p><p>Description: <br/>${description}</p>`)
        .pipe(res);
    }

});

router.get('/', function(req, res, next) {
    res.send('Need invoice details');
});

module.exports = router;
