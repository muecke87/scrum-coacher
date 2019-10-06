const express = require('express');
const app = express();
const userRoutes = express.Router();

let User = require('../models/User');

// Defined store route
userRoutes.route('/register').post(function (req, res) {
  let user = new User(req.body);
  user.save()
    .then(user => {
      res.status(200).json({'user': 'user in stored successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
  User.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

//  Defined update route
userRoutes.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function(err, next, user) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
      user.name = req.body.name;
      user.mail = req.body.mail;
      user.password = req.body.password;
      user.role = req.body.role;

      user.save().then(user => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

module.exports = userRoutes;
