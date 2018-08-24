const express = require('express');
const router = express.Router();
const db = require('../../models');

router.get('/api/meeting/:id', function (req, res, next) {
    // if (!session.user) {
    //   res.redirect('/login');
    // }
    // else {
      db.meeting.findAll({
          where: {
              id: req.params.id
          }
        }).then(matches => {
        res.json(matches)
      }).catch(next)
    // }
  })

  router.get('/api/meeting', function (req, res, next) {

      db.meeting.findAll({
          where: {
              id: req.params.id
          }
        }).then(matches => {
        res.json(matches)
      }).catch(next)
    // }
  })
  
  router.post('/api/meeting', function(req, res, next){
    // console.log(req.body);
  db.meeting.create({
    startTime: req.body.startTime,
  }).then(newMeeting => {
    res.json(newMeeting)
    })
    .catch(next)
  })
  
  //    if we decide to edit meeting times this code can be used
//   router.put('/api/meeting/:id', function(req, res, next) {
//     db.Meeting.update(req.body, 
//     {
//       where: {
//         id: req.params.id
//       }
//     })
//     .then(function(dbMeeting) {
//       res.json(dbMeeting)
//     })
//     .catch(next)
//   })
  
  router.delete('/api/meeting/:id', function(req,res,next) {
    db.Meeting.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbMeeting) {
      res.json(dbMeeting);
    })
    .catch(next)
  })

  router.delete('/api/meeting/:Userid', function(req,res,next) {
    db.Meeting.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbMeeting) {
      res.json(dbMeeting);
    })
    .catch(next)
  })
  
  
  module.exports = router;