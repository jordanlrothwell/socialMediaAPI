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
          _id: req.params.userID,
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

  // POST: Add a New Friend
  async addFriendByID(req, res) {
    try {
      const newFriend = await User.findOneAndUpdate(
        {
          _id: req.params.userID,
        },
        {
          $addToSet: {
            friends: req.params.friendID,
          },
        },
        {
          runValidators: true,
          new: true,
        }
      );
      res.status(200).json(newFriend);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //-------------------------------------------------- DELETE //

  // DELETE: Delete User by ID
  async deleteUserByID(req, res) {
    try {
      const userByID = await User.findOneAndDelete({
        _id: req.params.userID,
      });
      res.status(200).json(userByID);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // DELETE: Remove a Friend
  async removeFriendByID(req, res) {
    try {
      const removeFriend = await User.findOneAndUpdate(
        {
          _id: req.params.userID,
        },
        {
          $pull: {
            friends: req.params.friendID,
          },
        },
        { new: true }
      );
      res.status(200).json(removeFriend);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
