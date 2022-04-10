const router = require("express").Router();

const {
  findAllThoughts,
  findThoughtByID,
  createThought,
  updateThoughtByID,
  deleteThoughtByID,
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

// PUT: Update Thought by ID
router.route("/:thoughtID").put(updateThoughtByID);

//-------------------------------------------------- DELETE //

// DELETE: Delete Thought by ID
router.route("/:thoughtID").delete(deleteThoughtByID);

module.exports = router;
