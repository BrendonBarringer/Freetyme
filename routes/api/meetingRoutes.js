const express = require('express');
const router = express.Router();
const db = require('../../models');
const { ensureAuthenticated } = require('connect-ensure-authenticated');

// POST /api/start-meeting
// Adds a new meeting.
router.post('/api/start-meeting', 
  ensureAuthenticated(),
  function(req, res) {
    console.log("POST /api/start-meeting");
    let startTime = req.body.startTime;
    let userid = req.user.id; 

    // Create the new Meeting
    // And get the User
    Promise.all([
      db.Meeting.create({startTime}),
      db.User.findOne(
        { where: {id: userid},
          attributes: {exclude: ["hash"] }})
    ])

    // Then add Meeting/User relationship
    .then(results => {
      let dbMeeting = results[0];
      let dbUser = results[1];
      dbMeeting.addUser(dbUser)
      .then(dbResults => {
        res.json(dbResults);
      })
    });
});

// POST /api/join-meeting/
// Adds user to meeting specified by meetingid
router.post('/api/join-meeting', 
  ensureAuthenticated(),
  function(req, res) {
    let meetingid = req.body.meetingId;
    let userid = req.user.id; 

    // Fetch both the Meeting and the User
    Promise.all([
      db.Meeting.findOne({where: {id: meetingid}}),
      db.User.findOne(
        { where: {id: userid},
          attributes: {exclude: ["hash"] }})
    ])

    // Then add Meeting/User relationship
    .then(results => {
      // console.log("Meeting " + results[0]);
      // console.log("User " + results[1]);
      let dbMeeting = results[0];
      let dbUser = results[1];
      dbMeeting.addUser(dbUser)
      .then(dbResults => {
        res.json(dbResults);
      })
    });
  }
);

// POST /api/unjoin-meeting/
// Removes user from meeting specified by meetingid
router.post('/api/unjoin-meeting', 
  ensureAuthenticated(),
  function(req, res) {
    let meetingid = req.body.meetingId;
    let userid = req.user.id; 
    console.log("/api/unjoin-meeting meetingid " + meetingid + " userid " + userid);

    // Fetch both the Meeting and the User
    Promise.all([
      db.Meeting.findOne({where: {id: meetingid}}),
      db.User.findOne(
        { where: {id: userid},
          attributes: {exclude: ["hash"] }})
    ])

    // Then remove Meeting/User relationship
    .then(results => {          
      // console.log("Meeting " + results[0]);
      // console.log("User " + results[1]);
      let dbMeeting = results[0];
      let dbUser = results[1];
      dbMeeting.removeUser(dbUser)
      .then(dbResults => {
        res.json(dbResults);
      })
    });
  }
);

// GET /api/meeting
// Get all meetings
router.get('/api/meeting',
  ensureAuthenticated(),
  function (req, res) {
    db.Meeting.findAll( {include: [db.User],
                         order  : ["startTime"]} )
    .then(matches => {
      res.json(matches)
    })
    .catch(error => {
      res.json(error);
    });
})

// DELETE /api/user-meeting/
// Delete user meeting (delete user from a meeting)
router.delete('/api/user-meeting',
  ensureAuthenticated(),
  function(req,res) {
  let meetingid = req.body.meetingId;
  let userid = req.user.id; 

    // Fetch both the Meeting and the User
    Promise.all([
      db.Meeting.findOne({where: {id: meetingid}}),
      db.User.findOne(
        { where: {id: userid},
          attributes: {exclude: ["hash"] }})
    ])

    // Then add Meeting/User relationship
    .then(results => {
      let dbMeeting = results[0];
      let dbUser = results[1];
      dbUser.removeMeeting(dbMeeting)
      .then(dbResults => {
        res.json(dbResults);
      })
    });
});


module.exports = router;