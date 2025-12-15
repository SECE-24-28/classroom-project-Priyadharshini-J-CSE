const User = require("../models/user");
exports.createUser = async (req, res) => {
  try {
    // const { firstName, lastName, email   } = req.body;
    const createUser = await User.insertOne({
      firstName: "ABC",
      secondName: "DEF",
      email: "abc@gmail.com",
    });
    return res.status(200).json({
      success: true,
      message: "User is created successfully",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};

exports.createManyUsers = async (req, res) => {
  try {
    const { details } = req.body;
    const createUser = await User.insertMany(details);
    return res.status(200).json({
      success: true,
      message: "User is created successfully",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};

exports.DeleteOneUser=async(req,res)=>{
  try{
    const {id}=req.params;
    const deleteUser=await User.findByIdAndDelete(id);
    return res.status(200).json({
      success:true,
      message:"User is deleted successfully",
    });
  }catch(e){
    res.status(404).json({
      success:false,
      error:e,
    });
  }
}

export

