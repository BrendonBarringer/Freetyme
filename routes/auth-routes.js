var router = require('express').Router()
const { ensureAuthenticated } = require('connect-ensure-authenticated');
const db = require("../models");

module.exports = function(passport) {

	// POST "/auth/user"
	// Add a new user
	router.post("/auth/user", 
		function(req, res) {
			db.User.createWithEncryptedPassword(req.body.username, req.body.password, function(results) {
				res.json(results);
			});
		});

	// GET "/auth/is-logged-in"
	// Determines if user is logged in
	router.get("/auth/is-logged-in", 
		ensureAuthenticated(),  // If fails, returns 401 error, else call next function (the callback)
		function(req, res) {
			// if (!req.isAuthenticated || !req.isAuthenticated())
			res.json({success:(req.user? "Yes":"No"), user:req.user});
		});

	// POST "/auth/login"
	// Verify we have correct username/password
	router.post('/auth/login', 
		passport.authenticate('local'), //the next function (next arg here) is called after this one
	  	function(req, res) {
		    // If this function gets called, authentication was successful.
		    // `req.user` contains the authenticated user.
			let result = req.user ?
							{success: "Yes", user: {id: req.user.id, username: req.user.username}} :
							{success: "No"};
		    res.json(result);
		}
	)

	// GET "/auth/logout"
	// Logout the user
	router.get('/auth/logout',
		function(req, res) { 
			const old_user=req.user;
			req.logout();
			res.json({success:"Yes"});
		}
	);

	// GET "/auth/login"
	// Test route. Sends a form for client to send a user/password.
	router.get("/auth/login",
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
  
  	// GET "/auth/testuser"
	//use this route to test the user
	router.get('/auth/testuser',
		ensureAuthenticated(),  // If this fails, returns 401 error, else we call next function (the callback)
		function(req, res) {
				console.log("getting test user");
				console.log(req.user);
				res.json({success:(req.user? "Yes":"No"), user:req.user});
				console.log("Done getting test user");
		}
	);

	
	// GET "/auth/testmiddleware"
	// Test route. Check middleware
	router.get("/auth/testmiddleware",
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

	return router;
}