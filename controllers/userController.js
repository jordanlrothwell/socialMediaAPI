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
  
  //-------------------------------------------------- UPDATE //

  //-------------------------------------------------- DELETE //

};
