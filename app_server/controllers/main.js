var config = require('../models/data');

/* GET home page */
module.exports.index = function(req,res){
  res.render('index', config);
};