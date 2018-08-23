const router = require("express").Router();
const freetimeRoutes = require('./freetimeRoutes')

//  ADD API ROUTES HERE
router.use("/calendar", freetimeRoutes);


module.exports = router;