import { IoIosSend } from "react-icons/io";
import { useSendMessage } from "../../../hooks/useSendMessage";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
export const Messageinput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("")
    
  };
  return (
    <form onSubmit={handleOnSubmit} className="mt-auto flex items-center mb-2">
      <input
        type="text"
        placeholder="Send messages"
        className="focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-lg bg-gray-700 text-white text-sm p-2.5 w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="mx-5 text-3xl hover:text-blue-500"
      disabled={loading} >
              {loading ? (
                <ClipLoader color="blue" size={20} />
              ) : (
                <IoIosSend />
              )}</button>

        {/* <IoIosSend />
      </button> */}
    </form>
  );
};
