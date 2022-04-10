const { findOne, findOneAndUpdate } = require("../models/Thought");
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
      const allThoughts = await Thought.find().select("-__v");
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

  // PUT: Update Thought by ID
  async updateThoughtByID(req, res) {
    try {
      const thoughtByID = await Thought.findOneAndUpdate(
        {
          _id: req.params.thoughtID,
        },
        {
          $set: {
            thoughtText: req.body.thoughtText,
          },
        },
        {
          runValidators: true,
          new: true,
        }
      );
      res.status(200).json(thoughtByID);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // POST: Add New Reaction
  async addReaction(req, res) {
    try {
      const thoughtByID = await Thought.findOneAndUpdate(
        {
          _id: req.params.thoughtID,
        },
        {
          $addToSet: {
            reactions: req.body,
          },
        },
        {
          runValidators: true,
          new: true,
        }
      );
      res.status(200).json(thoughtByID);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //-------------------------------------------------- DELETE //

  // DELETE: Delete Thought by ID
  async deleteThoughtByID(req, res) {
    try {
      const thoughtByID = await Thought.findOne({
        _id: req.params.thoughtID,
      });
      const updateUser = await User.findOneAndUpdate(
        {
          username: thoughtByID["username"],
        },
        {
          $pull: {
            thoughts: req.params.thoughtID,
          },
        },
        {
          new: true,
        }
      );
      const deleteThought = await Thought.findOneAndDelete(
        {
          _id: req.params.thoughtID,
        },
        { new: true }
      );
      res.status(200).json(deleteThought);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // DELETE: Remove a Reaction
  async removeReaction(req, res) {
    try {
      const thoughtByID = await Thought.findOneAndUpdate(
        {
          _id: req.params.thoughtID,
        },
        {
          $pull: {
            reactions: {
              _id: req.params.reactionID,
            },
          },
        },
        {
          new: true,
        }
      );
      if (!thoughtByID) {
        res.status(400).json({message: `No thought with that ID`})
      }
      res.status(200).json(thoughtByID);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
