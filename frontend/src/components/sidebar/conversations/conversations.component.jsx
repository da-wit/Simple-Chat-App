import Conversation from "./conversation.component"

export const Conversations = () => {
  return (
    // <div className="flex flex-col gap-2 py-2">
    <div className="flex-1 flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-sky-300">
        <Conversation isOnline={true}/>
        <Conversation/>
        <Conversation isOnline={true}/>
        <Conversation/>
        <Conversation isOnline={true}/>
        <Conversation/>
        <Conversation isOnline={true}/>
        <Conversation/>
        <Conversation isOnline={true}/>
        <Conversation/>
        <Conversation isOnline={true}/>
        <Conversation/>
        <Conversation isOnline={true}/>
        <Conversation/>
        <Conversation isOnline={true}/>
        <Conversation/>
        <Conversation isOnline={true}/>
        <Conversation/>
        <Conversation isOnline={true}/>
        <Conversation/>
        <Conversation isOnline={true}/>
        <Conversation/>
    </div>
  )
}
