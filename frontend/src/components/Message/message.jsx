import Divider from "../divider";
import { Messageinput } from "./message.input";
import Receivedmessage from "./displaymessages/received.message";
import Sentmessage from "./displaymessages/Sent.message";
import MessageContainer from "./displaymessages/messageContainer";

const Messages = () => {
    return <div className="md:min-w-[450px] flex flex-col ml-2">
        <div className="px-4 py-2 ">
            <span>To:</span>
            <span className="ml-4">User name</span>
        </div>
        <Divider/>
     <MessageContainer/>
        <Messageinput/>
    </div>
}

export default Messages;