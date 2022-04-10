const Thought = require("../models/Thought");

module.exports = {
  //-------------------------------------------------- CREATE //

  //-------------------------------------------------- READ //
  
  // GET: Find All Thoughts
  async findAllThoughts(req, res) {
    const allThoughts = await Thought.find();
    res.status(200).json(allThoughts);
  },

  //-------------------------------------------------- UPDATE //

  //-------------------------------------------------- DELETE //

  // DELETE: 
};
