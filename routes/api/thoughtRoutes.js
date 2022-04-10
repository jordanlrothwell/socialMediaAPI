const router = require("express").Router();

const { findAllThoughts } = require("../../controllers/thoughtController");

//-------------------------------------------------- CREATE //

//-------------------------------------------------- READ //

// GET: Find All Thoughts
router.route("/").get(findAllThoughts);

//-------------------------------------------------- UPDATE //

//-------------------------------------------------- DELETE //

module.exports = router;
