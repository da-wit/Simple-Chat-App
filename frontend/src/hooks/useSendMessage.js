import { useState } from "react";
import toast from "react-hot-toast";
import { useSelectConversationContext } from "../context/SelectConversationContext";
import { useSelecctedMessagesContext } from "../context/SeletedMessagesContext";

export const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selected } = useSelectConversationContext();
  const { selectedMessages, setSelectedMessages } =
    useSelecctedMessagesContext();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/messages/send/${selected._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (res.ok) {
        console.log("data");
        console.log(data);
        console.log(data.message);
        console.log(data.newMessage);
        setSelectedMessages([...selectedMessages, data.newMessage]);
        toast.success("message Sent successfuly!");
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};
