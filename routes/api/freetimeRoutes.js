const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const FreeTime = require('../../models/freetime');




router.get('/api/schedule', function (req, res, next) {
  if (!session.user) {
    res.redirect('/login');
  }
  else {
    FreeTime.findAll({
      where: {
        User_id: req.user.User_id
      }

    }).then(matches => {
      res.json(matches)
    }).catch(next)
  }
})

router.post('/api/schedule', function(req, res, next){
FreeTime.create({
  startTime: req.params.startTime,
  endTime: req.params.endTime
}).then(newFreeTime => {
  res.json(newFreeTime)
  })
  .catch(next)
})


module.exports = router;