const express = require('express');
const router = express.Router();
const db = require('../../models');





router.get('/api/freetime', function (req, res, next) {
  // if (!session.user) {
  //   res.redirect('/login');
  // }
  // else {
    db.FreeTime.findAll({
      }).then(matches => {
      res.json(matches)
    }).catch(next)
  // }
})

router.post('/api/freetime', function(req, res, next){
  // console.log(req.body);
db.FreeTime.create({
  startTime: req.body.startTime,
  endTime: req.body.endTime
}).then(newFreeTime => {
  res.json(newFreeTime)
  })
  .catch(next)
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

router.delete('/api/freetime/:id', function(req,res,next) {
  db.FreeTime.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(dbFreeTime) {
    res.json(dbFreeTime);
  })
  .catch(next)
})


module.exports = router;