var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {

  main: function(req, res) {
    User.find({}, function(err, users) {
      res.render('index', {mongoose:users});
    })
  },

  new: function(req, res) {
    res.render('new');
  },


  create: function(req, res) {
    var mongoose = User({name: req.body.name, age: req.body.age});
    mongoose.save(function(err) {
      if(err) {
        console.log('something went wrong');
      } 
      else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        res.redirect('/');
      }
    })
  },


  show: function(req, res) {
    User.find({_id: req.params.id}, function(err, users) {
      if(err) {
        console.log('something went wrong');
      } 
      else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        console.log(users);
        res.render('show', {mongoose:users[0]});
      }
    })
  },


  edit: function(req, res) {
    User.find({_id: req.params.id}, function(err, users) {
      if(err) {
        console.log('something went wrong');
      } 
      else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
      res.render('edit', {mongoose:users[0]});
      }
    })
  },

  update: function(req, res) {
    User.findOne({_id: req.params.id}, function(err, user){
    user.name = req.body.name;
    user.age = req.body.age;
    user.save(function(err) {
      res.redirect('/');
    })
    })
  },

  destroy: function(req, res) {
    User.remove({_id: req.params.id}, function(err) {
    res.redirect('/');
    })
  },
}