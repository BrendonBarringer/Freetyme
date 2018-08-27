import axios from "axios";

export default {

  addFreetime: function (time1, time2) {
    axios.post(`/api/freetime`, {
      startTime: time1,
      endTime: time2
    }).then(function (response) {
      console.log(response);
    })
      .catch(function (err) {
        console.log(err);
      });
  },

  getFreetime: function(callback) {
    console.log("API.getFreetime");
    axios.get('/api/freetime')
      .then((res) => {
        console.log("returneed");
        console.log(res.data);
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  removeFreetime: function(freetimeId, callback) {
    axios.delete('/api/freetime', {data: {freetimeId: freetimeId}})
      .then((res) => {
        callback(res.status);
      })
      .catch((err) => {
        console.log(err);
        callback(err.response.status);
      });
  },

  startMeeting: function(startTime, callback) {
    axios.post('/api/start-meeting', {startTime})
      .then((res) => {
        callback(res.data);
      })
      .catch((err) => {
        callback(err.response.data);
      });
  },

  joinMeeting: function(meetingId, callback) {
    axios.post('/api/join-meeting', {meetingId})
      .then((res) => {
        callback(res.data);
      })
      .catch((err) => {
        callback(err.response.data);
      });
  },

  unjoinMeeting: function(meetingId, callback) {
    axios.post('/api/unjoin-meeting', {meetingId})
      .then((res) => {
        callback(res.data);
      })
      .catch((err) => {
        callback(err.response.data);
      });
  },

  // Get All Meetings
  getMeeting: function(callback) {
    axios.get('/api/meeting')
      .then((res) => {
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

}

