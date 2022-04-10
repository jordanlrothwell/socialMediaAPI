const Thought = require("../models/Thought");
const User = require("../models/User");

module.exports = {
  //-------------------------------------------------- CREATE //

  // POST: Create New Thought
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      const userID = await newThought._id;
      const updateUser = await User.findOneAndUpdate(
        {
          username: req.body.username,
        },
        {
          $addToSet: {
            thoughts: userID,
          },
        },
        { runValidators: true, new: true }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //-------------------------------------------------- READ //

  // GET: Find All Thoughts
  async findAllThoughts(req, res) {
    try {
      const allThoughts = await Thought.find();
      res.status(200).json(allThoughts);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // GET: Find Thought by ID
  async findThoughtByID(req, res) {
    try {
      const thoughtByID = await Thought.findOne({
        _id: req.params.thoughtID,
      });
      res.status(200).json(thoughtByID);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //-------------------------------------------------- UPDATE //

  //-------------------------------------------------- DELETE //

  // DELETE:
};
