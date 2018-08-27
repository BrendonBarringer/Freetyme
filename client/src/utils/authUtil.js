import axios from "axios";

class AuthUtil {
  constructor() {
    this.loggedIn = false;
    this.userId = 0;
    this.username = "";
    this.loggedInChecked = false;
    this.loginNotifyCallbacks = [];
    // sessionStorage.setItem("Yo", "Mama");
  }

  // Get user id
  // Note: Must call checkLoggedIn or logIn first
  //       This will normally happen by displaying Navbar
  getUserId() {
    return this.userId;
  }

  // Add a notify callback
  // Called whenever we login or logout
  // Note: Call 'checkLoggedIn()' to 
  //       cause notifies for current state
  registerLoginNotify(cb) {
    this.loginNotifyCallbacks.push(cb);
    this.checkLoggedIn();
  }

  unregisterLoginNotify(cb) {
    let index = this.loginNotifyCallbacks.indexOf(cb);
    this.loginNotifyCallbacks.splice(index, 1);
  }

  // Notify everyone of login or logout
  callNotifyCallbacks(userId, username, fullname) {
    for (let i = 0; i < this.loginNotifyCallbacks.length; i++)
      this.loginNotifyCallbacks[i](userId, username, fullname);
  }

  // Check for login
  // Causes notify callbacks to be called
  checkLoggedIn() {
    this.isLoggedIn(null);
  }

  isLoggedIn(cb) {
    if (this.loggedInChecked) {
      if (cb)
        cb(this.loggedIn, this.username, this.fullname);
      this.callNotifyCallbacks(this.userId, this.username, this.fullname);
    } else {
      axios.get("/auth/is-logged-in")
      .then((result) => {
        if (result.data.success === "Yes") {
          this.loggedIn = true;
          this.userId = result.data.user.id;
          this.username = result.data.user.username;
          this.fullname = result.data.user.fullname;
        } else {
          this.loggedIn = false;
          this.userId = 0;
          this.username = "";
          this.fullname = "";
        }
        if (cb)
          cb(this.loggedIn, this.username, this.fullname);
        this.callNotifyCallbacks(this.userId, this.username, this.fullname);
      })
      .catch((error) => {
        if (cb)
          cb(false, "");
        this.callNotifyCallbacks(0, "");
      });
    }
  }

  login(username, password, cb) {
    axios.post(`/auth/login?username=${username}&password=${password}`)
    .then((result) => {
      if (result.data.success === "Yes") {
        this.loggedIn = true;
        this.userId = result.data.user.id;
        this.username = result.data.user.username;
      } else {
        this.loggedIn = false;
        this.userId = 0;
        this.username = "";
      }
      cb(this.loggedIn, this.username);
      this.callNotifyCallbacks(this.userId, this.username);
    })
    .catch((error) => {
      cb(false, "");
      this.callNotifyCallbacks(0, "");
    });
  }

  logout(cb) {
    axios.get(`/auth/logout`)
    .then((result) => {
      if (result.data.success === "Yes") {
        this.loggedIn = true;
        this.userId = result.data.user.id;
        this.username = result.data.user.username;
      } else {
        this.loggedIn = false;
        this.username = 0;
        this.username = "";
      }
      cb(this.loggedIn, this.username);
      this.callNotifyCallbacks(this.userId, this.username);
    })
    .catch((error) => {
      cb(false, "");
      this.callNotifyCallbacks(0, "");
    });
  }

  signup(fullname, username, climbAbility, password, callback) {
    axios.post(`/auth/signup`, {fullname, username, climbAbility, password})
    .then(function (response) {
      console.log(response);
      callback();
    })
    .catch(function (err) {
      console.log(err);
      callback();
    });
  };
}
export default new AuthUtil();