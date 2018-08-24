import axios from "axios";
import Signup from "../pages/Signup";

class AuthUtil {
  constructor() {
    this.loggedIn = false;
    this.username = "";
    this.loggedInChecked = false;
  }

  isLoggedIn(cb) {
    if (this.loggedInChecked) {
      cb(this.loggedIn, this.username);
    } else {
      axios.get("/auth/is-logged-in")
      .then((result) => {
        if (result.data.success === "Yes") {
          this.loggedIn = true;
          this.username = result.data.user.username;
        } else {
          this.loggedIn = false;
          this.username = "";
        }
        cb(this.loggedIn, this.username);
      })
      .catch((error) => {
        cb(false, "");
      });
    }
  }

  login(username, password, cb) {
    axios.post(`/auth/login?username=${username}&password=${password}`)
    .then((result) => {
      if (result.data.success === "Yes") {
        this.loggedIn = true;
        this.username = result.data.user.username;
      } else {
        this.loggedIn = false;
        this.username = "";
      }
      cb(this.loggedIn, this.username);
    })
    .catch((error) => {
      cb(false, "");
    });
  }

  logout(cb) {
    axios.get(`/auth/logout`)
    .then((result) => {
      if (result.data.success === "Yes") {
        this.loggedIn = true;
        this.username = result.data.user.username;
      } else {
        this.loggedIn = false;
        this.username = "";
      }
      cb(this.loggedIn, this.username);
    })
    .catch((error) => {
      cb(false, "");
    });
  }


Signup(username, password) {
  axios.post(`/auth/user`,{
    username: username,
    password: password
  }).then(function (response) {
    console.log(response);
  })
    .catch(function (err) {
      console.log(err);
    });
};
}
export default new AuthUtil();