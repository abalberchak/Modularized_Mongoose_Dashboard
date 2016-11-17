var users = require('../controllers/users.js');
module.exports = function(app) {
  
  
	app.get('/', function(req, res) {
		users.main(req, res)
	})



	app.get('/mongooses/new', function(req,res){
		users.new(req, res)
	})


	app.post('/mongooses', function (req, res) {
		users.create(req, res)
	})



	app.get('/mongooses/:id', function(req, res) {
		users.show(req, res)
	})




	app.get('/mongooses/:id/edit', function(req, res) {
		users.edit(req, res)
	})




	app.post('/mongooses/:id', function(req, res) {
		users.update(req, res)
	})



	app.post('/mongooses/:id/destroy', function(req, res) {
		users.destroy(req, res)
	})

}