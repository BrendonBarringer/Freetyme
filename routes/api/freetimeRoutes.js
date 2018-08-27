const express = require('express');
const router = express.Router();
const db = require('../../models');
const { ensureAuthenticated } = require('connect-ensure-authenticated');

router.get('/api/freetime', 
  ensureAuthenticated(),
  function (req, res) {
    db.FreeTime.findAll({
      include: [db.User],
      order: ["startTime"]
  })
  .then(matches => {
    res.json(matches)
  })
  .catch(error => {
    console.log(error);
  });
})

router.post('/api/freetime', 
  ensureAuthenticated(),
  function(req, res){
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


router.put('/api/freetime/:id', 
  ensureAuthenticated(),
  function(req, res) {
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

router.delete('/api/freetime', 
  ensureAuthenticated(),
  function(req,res) {
    db.FreeTime.destroy({
      where: {
        id: req.body.freetimeId
      }
    })
    .then(function(dbFreeTime) {
      res.json(dbFreeTime);
    })
    .catch(next)
})


module.exports = router;