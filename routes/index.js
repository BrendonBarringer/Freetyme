const path = require("path");
const router = require("express").Router();
const authRoutes = require("./auth/auth-routes");
// const apiRoutes = require("./api");

// AUTH Routes
router.use("/auth", authRoutes);

// API Routes
// router.use("/api", apiRoutes);

// If no API or AUTH routes or are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
