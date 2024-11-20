import { useEffect, useState } from "react";
import { useSelectConversationContext } from "../context/SelectConversationContext";
import toast from "react-hot-toast";
import { useSelectedMessagesContext } from "../context/SeletedMessagesContext";
import useListenMessages from "./useListenMessages";

export const useFetchMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selected } = useSelectConversationContext();
  const { setSelectedMessages } = useSelectedMessagesContext();
  useListenMessages();

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selected._id}`, {
          method: "GET",
        });
        const data = await res.json();
        if (res.ok) {
          setSelectedMessages(data);
          //   toast.success("Message fetched successfuly!");
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, [selected._id]);
  return { loading };
};
