const express = require('express');
const router = express.Router();
const db = require('../../models');
const { ensureAuthenticated } = require('connect-ensure-authenticated');

router.get('/api/freetime', function (req, res, next) {
  db.FreeTime.findAll({
    include: [db.User]
  })
  .then(matches => {
    res.json(matches)
  })
  .catch(error => {
    console.log(error);
  });
})

router.post('/api/freetime', function(req, res, next){
  // console.log(req.body);
  ensureAuthenticated(),
  db.FreeTime.create({
  UserId: req.user.id,
  startTime: req.body.startTime,
  endTime: req.body.endTime
  })
  .then(newFreeTime => {
    res.json(newFreeTime)
  })
  .catch(error => {
    console.log(error);
  });
})


router.put('/api/freetime/:id', function(req, res, next) {
  db.FreeTime.update(req.body, 
  {
    where: {
      id: req.params.id
    }
  })
  .then(function(dbFreeTime) {
    res.json(dbFreeTime)
  })
  .catch(next)
})

router.delete('/api/freetime', function(req,res,next) {
  db.FreeTime.destroy({
    where: {
      id: req.id
    }
  })
  .then(function(dbFreeTime) {
    res.json(dbFreeTime);
  })
  .catch(next)
})


module.exports = router;