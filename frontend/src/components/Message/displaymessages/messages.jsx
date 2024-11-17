import { useEffect, useRef } from "react";
import { useSelectConversationContext } from "../../../context/SelectConversationContext";
import { useSelecctedMessagesContext } from "../../../context/SeletedMessagesContext";
import { useFetchMessage } from "../../../hooks/useFetchMessages";
import Receivedmessage from "./received.message";
import Sentmessage from "./Sent.message";

const Messages = () => {
  const containerRef = useRef(null)
  const {selectedMessages,setSelectedMessages} = useSelecctedMessagesContext();
  const {selected} = useSelectConversationContext()
  const {loading} = useFetchMessage()
  console.log("messages",selectedMessages)
  const hasMessage = selectedMessages.length > 0;

  const scrollToBottom = ()=> {
    if(containerRef.current){
      containerRef.current.scrollTop =  containerRef.current.scrollHeight;
    }
  }

  const formatTIme = (time)=>{
    const date = new Date(time)
    return date.toLocaleTimeString()
  }

  useEffect(()=>{
    scrollToBottom()
  },[selected,selectedMessages])

  return hasMessage? !loading ? (
    
    <div ref={containerRef} className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-track-blue-800 scrollbar-thumb-blue-400">
       {selectedMessages.map((messages)=>
        messages.receiverId === selected._id?(<Sentmessage key={messages._id} message={messages.message} time={formatTIme(messages.createdAt)}/>):<Receivedmessage key={messages._id} message={messages.message} time={formatTIme(messages.createdAt)} />) }      

    </div>
  ):(<div className="flex justify-center items-center text-4xl h-screen">Loading....</div>) :
  (<div className="flex h-screen justify-center items-center text-lg">Send a message to start a conversation</div>)
}

export default Messages;
