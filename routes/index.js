var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '111111',
    port     : 3306,
    database : 'weathers'
  });

  connection.connect();

  connection.query('SELECT * from life_info', function(err, rows, fields) {
    if (!err){
      console.log('호출받음 The solution is: ', rows);
      console.log(req.body);

      res.send(rows);

    }
    else{
      console.log('Error while performing Query.', err);
      res.send(err);

    }
  });

  connection.end();
});


module.exports = router;
