const router = require("express").Router();

const {
  createUser,
  findAllUsers,
  findUserByID,
  updateUserByID,
  deleteUserByID,
  addFriendByID,
  removeFriendByID,
} = require("../../controllers/userController");

//-------------------------------------------------- CREATE //

// POST: Create User
router.route("/").post(createUser);

//-------------------------------------------------- READ //

// GET: Find All Users
router.route("/").get(findAllUsers);

// GET: Find User by ID
router.route("/:userID").get(findUserByID);

//-------------------------------------------------- UPDATE //

// PUT: Update User by ID
router.route("/:userID").put(updateUserByID);

// POST: Add a New Friend
router.route("/:userID/friends/:friendID").post(addFriendByID);

//-------------------------------------------------- DELETE //

// DELETE: Delete User by ID
router.route("/:userID").delete(deleteUserByID);

// DELETE: Delete Friend by ID
router.route("/:userID/friends/:friendID").delete(removeFriendByID);

module.exports = router;
