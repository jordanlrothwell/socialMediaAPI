const router = require("express").Router();

const {
  createUser,
  findAllUsers,
} = require("../../controllers/userController");

//-------------------------------------------------- CREATE //

// POST: Create User
router.route("/").post(createUser);

//-------------------------------------------------- READ //

// GET: Find All Users
router.route("/").get(findAllUsers);

//-------------------------------------------------- UPDATE //

//-------------------------------------------------- DELETE //

module.exports = router;
