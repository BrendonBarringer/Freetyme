import axios from "axios";

export default {

  removeFreetime: function (id) {

  },

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




  getFreetime: function (callback) {
    axios.get('/api/freetime')
      .then((res) => {
        console.log(res.data)
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
}