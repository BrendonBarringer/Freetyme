var router = require('express').Router()
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

module.exports = function(passport) {

  // GET "/auth/login"
	router.get(
		'/auth/login',
	 	function(req, res) {
			res.send(`
				<html>
				<form method="post"> 
					<input name="username"/>
									<input name="password"/>
									<input type="submit">
				</form>
				</html>
				`);
			}
	);
  
  // POST "/auth/login"
	router.post('/auth/login', 
		passport.authenticate('local'), //the next function (next arg here) is called after this one
	  	function(req, res) {
		    // If this function gets called, authentication was successful.
		    // `req.user` contains the authenticated user.
		    //res.sendFile()
		    res.json({success:(req.user? "Yes":"No"), user:req.user});
		}
	)

  // GET "/auth/testuser"
	//use this route to test the user
	router.get(
		'/auth/testuser',
		ensureLoggedIn("/auth/login"),
		function(req, res) {
				console.log("getting test user");
				console.log(req.user);
				res.json({success:(req.user? "Yes":"No"), user:req.user});
				console.log("Done getting test user");
		}
  );
  
  // GET "/auth/testmiddleware"
	router.get(
		"/auth/testmiddleware",
		(req,res,next)=> {
			if (req.user) next();
			else {
			console.log("testmiddleware: NOT LOGGED IN"); 
			res.status(403).send('Please Log in');
		}
		},
		(req,res) => { 
			console.log("testmiddleware: LOGGED IN"); 
			res.send("You are logged in with user " + req.user.username);
		}
	);

  // GET "/auth/logout"
	router.get(
		'/auth/logout',
		function(req, res) { 
			const old_user=req.user;
			req.logout();
			res.json({success:(req.user? "No":"Yes"), user:req.user, "old_user":old_user});
		}
	);

	return router;

}