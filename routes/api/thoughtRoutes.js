const router = require("express").Router();

const {
  findAllThoughts,
  findThoughtByID,
  createThought,
} = require("../../controllers/thoughtController");

//-------------------------------------------------- CREATE //

// POST: Create New Thought
router.route("/").post(createThought);

//-------------------------------------------------- READ //

// GET: Find All Thoughts
router.route("/").get(findAllThoughts);

// GET: Find Thought by ID
router.route("/:thoughtID").get(findThoughtByID);

//-------------------------------------------------- UPDATE //

//-------------------------------------------------- DELETE //

module.exports = router;
