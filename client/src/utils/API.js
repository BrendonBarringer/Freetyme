import axios from "axios";

export default {
addFreetime: function(time1, time2){
    axios.post(`/api/freetime`,{
      startTime: time1,
      endTime: time2
    }).then(function(response) {
      console.log(response);
    })
    .catch(function(err) {
      console.log(err);
    });
  }
};


axios.get('/api/freetime')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err);
  });