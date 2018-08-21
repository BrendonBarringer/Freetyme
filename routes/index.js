const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");

// Do not add AUTH Routes here.
// They are added directly from passport-init.

// API Routes
// router.use("/api", apiRoutes);

// If no API or AUTH routes or are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
