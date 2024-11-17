import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedUserId = req.user._id;
    const users = await User.find({ _id: { $ne: loggedUserId } }).select(
      "-password"
    );
    return res.status(200).json(users);
  } catch (error) {
    console.log("Error before the user controller", { error: error.message });
    return res.status(500).send({ error: "Internal server error" });
  }
};
