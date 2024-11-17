import Divider from "../../divider";
import { Messageinput } from "../messageinput/message.input";
import Messages from "../displaymessages/messages";
import MessageEmpty from "../displaymessages/messageEmpty";
import MessageDisplay from "../displaymessages/messageDisplay";
import { useSelectConversationContext } from "../../../context/SelectConversationContext";

const MessageContainer = () => {
    const {selected,setSelected} = useSelectConversationContext()
    const hasConversation = Object.keys(selected).length >0;
    console.log(hasConversation)
    console.log(selected)
    return <div className="md:min-w-[450px] flex flex-col ml-2">
      
     {hasConversation?<MessageDisplay/>:<MessageEmpty/>}
    </div>
}

export default MessageContainer;