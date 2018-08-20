var router = require('express').Router()
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

module.exports = function(passport) {

  // GET "/auth/login"
	router.get('/login',	  	function(req, res) {
		res.send(`
			<form method="post"> 
				<input name="username"/>
								<input name="password"/>
								<input type="submit">
			</form>
			`);
  });
  
  // POST "/auth/login"
	router.post('/login',
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
	router.get('/testuser',
		//passport.authenticate('local'),
		ensureLoggedIn(),
		  function(req, res) {
		  		console.log("getting test user");

			    res.json({success:(req.user? "Yes":"No"), user:req.user});
			    console.log("Done getting test user");

		  }
  );
  
  // GET "/auth/testmiddleware"
	router.get("/testmiddleware", (req,res,next)=>{
		if (req.user) next();
		else {
			res.sendStatus(403);
			res.send("Please Log in");
		}
	},
	(req,res)=>res.send("You are logged in with user " + req.user.username)
	);

  // GET "/auth/logout"
	router.get('/logout',
		

	  	function(req, res) { 
		  	const old_user=req.user;
		  	req.logout();

	    	res.json({success:(req.user? "No":"Yes"), user:req.user, "old_user":old_user});
	});

	return router;

}