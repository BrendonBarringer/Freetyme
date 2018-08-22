import axios from "axios";

export default {
addFreetime: function(time1, time2){
    console.log("help!!!")
    axios.post(`/api/schedule?startTime=${time1}&endTime=${time2}`, function(req, res){
    
      res.redirect("/calendar")
    })
  }
};
