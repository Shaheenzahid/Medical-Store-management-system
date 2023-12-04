const User = require('../models/User');
async function register(req, res) {

  try {
      const user = await User.create(req.body);
      res.status(201).json(user);
  }
  catch (err) {

      res.status(500).json({ error: err.message });
  }
}
module.exports = {
  register,
};