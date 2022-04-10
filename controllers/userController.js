const User = require("../models/User");

module.exports = {
  //-------------------------------------------------- CREATE //

  // POST: Create User
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //-------------------------------------------------- READ //

  // GET: Find All Users
  async findAllUsers(req, res) {
    try {
      const allUsers = await User.find();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // GET: Find User by ID
  async findUserByID(req, res) {
    try {
      const userByID = await User.findOne({
        _id: req.params.studentID,
      }).select("-__v");
      res.status(200).json(userByID);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //-------------------------------------------------- UPDATE //

  // PUT: Update User by ID
  async updateUserByID(req, res) {
    try {
      const userByID = await User.findOneAndUpdate(
        {
          _id: req.params.studentID,
        },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );
      res.status(200).json(userByID);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //-------------------------------------------------- DELETE //
};
