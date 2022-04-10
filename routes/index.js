const router = require("express").Router();
const thoughtRoutes = require("./thoughtRoutes");

router.use("/thought", thoughtRoutes);

module.exports = router;
