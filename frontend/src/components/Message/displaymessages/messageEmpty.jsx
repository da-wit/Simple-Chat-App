import { TbMessage2Plus } from "react-icons/tb";
const MessageEmpty = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <span className="text-4xl">No Message Selected</span>
      <TbMessage2Plus className="text-9xl"/>
    </div>
  )
}

export default MessageEmpty
