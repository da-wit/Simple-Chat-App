import { useEffect } from "react";
import { useSelectedMessagesContext } from "../context/SeletedMessagesContext";
import { useSocketContext } from "../context/SocketContext";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { selectedMessages, setSelectedMessages } =
    useSelectedMessagesContext();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setSelectedMessages([...selectedMessages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, selectedMessages, setSelectedMessages]);
};
export default useListenMessages;
