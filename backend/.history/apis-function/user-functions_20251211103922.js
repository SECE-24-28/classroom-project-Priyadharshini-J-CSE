const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    // Accept either { details: { ... } } or top-level fields
    const payload = req.body.details ? req.body.details : req.body;
    const { firstName, lastName, email } = payload;

    if (!firstName || !email || !mobileNumber || !password) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: firstName, email, mobileNumber, password",
      });
    }

    const created = await User.create({
      firstName,
      lastName,
      email,
      mobileNumber,
      password,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: { id: created._id },
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message || e,
    });
  }
};

exports.createManyUsers = async (req, res) => {
  try {
    const details = req.body.details || req.body;
    if (!Array.isArray(details) || details.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Provide an array of users in `details`",
      });
    }
    const created = await User.insertMany(details);
    return res.status(201).json({
      success: true,
      message: "Users created successfully",
      createdCount: created.length,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message || e,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const getDetails = await User.find();
    return res.status(200).json({
      success: true,
      data: getDetails,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message || e,
    });
  }
};

exports.updateEmail = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Provide both `name` and `email` in the body",
      });
    }
    const result = await User.updateOne({ firstName: name }, { $set: { email: email } });
    if (result.matchedCount === 0 && result.n === 0 && result.nModified === 0) {
      // No-op — still return success but inform client
    }
    return res.status(200).json({
      success: true,
      message: "Email is updated",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message || e,
    });
  }
};
