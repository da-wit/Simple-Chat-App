import { useSelectConversationContext } from "../../../context/SelectConversationContext"
import Divider from "../../divider"
import { Messageinput } from "../messageinput/message.input"
import Messages from "./messages"

const MessageDisplay = () => {
  const {selected} = useSelectConversationContext()
      return( 
      <div className="md:min-w-[450px] sm:h-[450px] md:h-[550px] lg:h-screen flex flex-1 flex-col ml-2">
        <div className="px-4 py-2 ">
            <span>To:</span>
            <span className="ml-4">{selected.fullName}</span>
        </div>
        <Divider/>
    <Messages/>

        <Messageinput/>
    </div>
    
      )
  
}

export default MessageDisplay
