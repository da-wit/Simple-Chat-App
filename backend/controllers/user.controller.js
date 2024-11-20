import User from "../models/user.model.js";
import { userSocketMap } from "../socket/socket.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedUserId = req.user._id;
    const users = await User.find({ _id: { $ne: loggedUserId } }).select(
      "-password"
    );
    const sortedUsers = users.sort((a, b) => {
      const aIsOnline = userSocketMap[a._id]; // Check if user is online
      const bIsOnline = userSocketMap[b._id]; // Check if user is online

      // Online users should be at the top
      if (aIsOnline && !bIsOnline) {
        return -1; // a is online, b is offline, a comes first
      }
      if (!aIsOnline && bIsOnline) {
        return 1; // b is online, a is offline, b comes first
      }
      return 0; // If both are online or both are offline, maintain their order
    });

    return res.status(200).json(sortedUsers);
  } catch (error) {
    console.log("Error before the user controller", { error: error.message });
    return res.status(500).send({ error: "Internal server error" });
  }
};

export const getSearchResult = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      const loggedUserId = req.user._id;
      const users = await User.find({ _id: { $ne: loggedUserId } }).select(
        "-password"
      );
      return res.status(200).json(users);
    }

    const result = await User.find({
      $or: [
        { fullName: { $regex: name, $options: "i" } },
        { username: { $regex: name, $options: "i" } },
      ],
    });

    return res.status(200).json(result);
  } catch (error) {
    console.log("Error before the user controller", { error: error.message });
    return res.status(500).send({ error: "Internal server error" });
  }
};
