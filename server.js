const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Passport stuff
app.use(require('cookie-parser')()); //
app.use(require('morgan')('combined'));
require('./passport-init')(app);

// Define API routes here
app.use(require("./routes/api/freetimeRoutes"));
app.use(require("./routes/api/meetingRoutes"));

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
console.log("Doing db.sequelize.sync()");
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    // After sequelize sync completes, start to listen
    console.log("App listening on port " + PORT);
  });
});
