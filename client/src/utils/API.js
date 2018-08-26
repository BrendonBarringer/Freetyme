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
    axios.get('/api/freetime')
      .then((res) => {
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  removeFreetime: function(freetimeId, callback) {
    axios.delete('/api/freetime', {id: freetimeId})
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
  }
}