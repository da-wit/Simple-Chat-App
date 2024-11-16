import { IoIosSend } from "react-icons/io";
export const Messageinput = () => {
  return (
    <form className="mt-auto flex items-center mb-2">
        <input type="text" placeholder="Send messages" className= "focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-lg bg-gray-700 text-white text-sm p-2.5 w-full"/>
      <button className="mx-5 text-3xl hover:text-blue-500">
      <IoIosSend />
      </button>
    </form>
  )
}
