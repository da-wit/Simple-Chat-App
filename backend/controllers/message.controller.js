import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const { message } = req.body;
    const senderId = req.user._id;

    const user = await User.findById(receiverId);
    if (!user) {
      return res.status(400).json({ error: "user not found" });
    }
    let conversation = await Conversation.findOne({
      participantes: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = new Conversation({
        participantes: [senderId, receiverId],
        messages: [],
      });
    }

    const newMessage = new Message({
      senderId: senderId,
      receiverId: receiverId,
      message: message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // await conversation.save();
    // await newMessage.save();
    // we can use this to run the save in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    // The socket IO functionality will go here

    const receiverSocketID = getReceiverSocketId(receiverId);
    if (receiverSocketID) {
      io.to(receiverSocketID).emit("newMessage", newMessage);
    }

    return res.status(201).json({
      newMessage,
    });
  } catch (error) {
    console.log("Error before the message controller", {
      error: error.message,
    });
    return res.status(500).send({ error: "Internal server error" });
  }
};
export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    // const conversation = await Conversation.findOne({participantes:{$all:[senderId,userToChatId]}}).populate(["messages",'participantes']);
    // const conversation = await Conversation.findOne({participantes:{$all:[senderId,userToChatId]}}).populate([{path:"messages"},{path:"participantes",select:"-password"}]);
    const conversation = await Conversation.findOne({
      participantes: { $all: [senderId, userToChatId] },
    }).populate("messages");
    if (!conversation) {
      return res.status(200).json([]);
    }
    const messages = conversation.messages;
    return res.status(200).json(messages);
  } catch (error) {
    console.log("Error before the message controller", {
      error: error.message,
    });
    return res.status(500).send({ error: "Internal server error" });
  }
};
