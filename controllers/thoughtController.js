const Thought = require("../models/Thought");

module.exports = {
  //-------------------------------------------------- CREATE //

  // POST: Create New Thought
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      res.status(200).json(newThought);
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
