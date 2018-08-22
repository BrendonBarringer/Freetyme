const express = require('express');
const router = express.Router();
const session = require('express-session');
const bodyParser = require('body-parser');
const models = require('../models');

router.get('/schedule', function(req, res){
  if(!session.user){
    res.redirect('/login');
  }
  else {
    res.render("schedule", {user: session.user});
  }
})

router.post('/schedule', function(req, res){
  models.FreeTime.create({
    content: req.body.content,
    UserID: session.user.dataValues.id
  }).then(function (){
    res.redirect('/');
  })
})

module.exports = router;