const express = require("express");
const {
  createUser,
  createManyUsers,
} = require("../apis-function/user-functions");
const router = express.Router();
router.post("/userSignup", createUser);
router.post("/userSignupMany", createManyUsers);
// router.delete("/userDelete/:id",DeleteOneUser);
// router.delete("/userDeleteMany",DeleteManyUsers);
router.get("/userGet", (req, res) => {
  data=req.body;
  res.status(200).json({
    success: true,
    data
  });
});
module.exports = router;
