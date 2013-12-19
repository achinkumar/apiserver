
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.paycart = function(req, res){
  res.render('paycart', { title: 'Paycart' });
};
exports.viewEmployee =function(req,res){
	var employee = {"mode":"view","data":{"emp_id":"1","name":"achin"}};
	res.json(employee);
}
