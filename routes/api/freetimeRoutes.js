const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const FreeTime = require('../../models/freetime');




router.get('/api/schedule', function(req, res, err){
  if(!session.user){
    res.redirect('/login');
  }
  else {
   FreeTime.findAll({
       where: {
           User_id: req.user.User_id
       }
    
   }).then( matches => {
       res.json(matches)
   }).catch(err)
  }
})

router.post('/api/schedule', function(req, res){
  models.FreeTime.create({
    content: req.body.content,
    UserID: session.user.dataValues.id
  }).then(function (){
    res.redirect('/');
  })
})

module.exports = router;