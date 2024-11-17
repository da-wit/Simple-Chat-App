import { useSelectConversationContext } from "../../../context/SelectConversationContext";
import { useUserContext } from "../../../context/UserContext";
import { useFetchUsers } from "../../../hooks/useFetchUsers"
import Conversation from "./conversation.component"

export const Conversations = () => {
  const { loading } = useFetchUsers();
  const {users} = useUserContext()
  const  {selected,setSelected} = useSelectConversationContext()

  const onConversationClicked = (conversation)=> {
    if(selected._id === conversation._id){
      setSelected({})
    }
    else{
      setSelected(conversation)
    }
    console.log(conversation)
  }
  console.log(users)
  return (
    // <div className="flex flex-col gap-2 py-2">
    <div className="flex-1 flex-col overflow-auto scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-sky-300">
       {users.map((conversation,index)=>(
        <Conversation key={conversation._id} name={conversation.fullName} username={conversation.username} profilePic={conversation.profilePic} isOnline={index%2 === 0 ?true :false} onclick={() => onConversationClicked(conversation)} isSelected={selected._id === conversation._id} />
       ))}
       
        
    </div>
  )
}
