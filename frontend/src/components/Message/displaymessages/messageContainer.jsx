import Receivedmessage from "./received.message";
import Sentmessage from "./Sent.message";

const MessageContainer = () => {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-track-blue-800  scrollbar-thumb-blue-400 scroll-smooth">
      <Sentmessage message="HI, dawit how are you doing?" />
      
      
      <Receivedmessage/>
      <Sentmessage message="HI, dawit how are you doing?" />
      
      
    </div>
  )
}

export default MessageContainer;
