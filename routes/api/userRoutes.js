const router = require("express").Router();

const {
  createUser,
  findAllUsers,
  findUserByID,
  updateUserByID,
  deleteUserByID,
} = require("../../controllers/userController");

//-------------------------------------------------- CREATE //

// POST: Create User
router.route("/").post(createUser);

//-------------------------------------------------- READ //

// GET: Find All Users
router.route("/").get(findAllUsers);

// GET: Find User by ID
router.route("/:studentID").get(findUserByID);

//-------------------------------------------------- UPDATE //

// PUT: Update User by ID
router.route("/:studentID").put(updateUserByID);

//-------------------------------------------------- DELETE //

// DELETE: Delete User by ID
router.route("/:studentID").delete(deleteUserByID);

module.exports = router;
