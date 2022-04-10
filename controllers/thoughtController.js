const Thought = require("../models/Thought");

module.exports = {
  async getThoughts(req, res) {
    const allThoughts = await Thought.find();
    res.status(200).json(allThoughts);
  },
};
