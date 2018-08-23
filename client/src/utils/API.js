import axios from "axios";

export default {
addFreetime: function(time1, time2){
    axios.post(`/api/freetime?startTime=${time1}&endTime=${time2}`, function(req, res){
    
      res.redirect("/calendar")
    })
  }
};
