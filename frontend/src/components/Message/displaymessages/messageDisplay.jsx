import Divider from "../../divider"
import { Messageinput } from "../messageinput/message.input"
import Messages from "./messages"

const MessageDisplay = () => {
 
      return( 
      <div className="md:min-w-[450px] flex flex-1 flex-col ml-2">
        <div className="px-4 py-2 ">
            <span>To:</span>
            <span className="ml-4">User name</span>
        </div>
        <Divider/>
     <Messages/>
        <Messageinput/>
    </div>
    
      )
  
}

export default MessageDisplay
