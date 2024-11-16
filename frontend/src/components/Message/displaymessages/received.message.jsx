
const Receivedmessage = ({message="sfdkjf dkf jkdjf kjdkf kjd f"}) => {
  return (
    <div className="flex flex-col ml-2 items-start">
    <div className="w-max max-w-xs p-2 m text-lg text-white bg-blue-400 break-words  rounded-tr-lg rounded-br-lg rounded-tl-lg">
      {message}
    </div>
    <span className="text-sm mb-2 text-gray-500">Time</span>
    </div>
      
  )
}

export default Receivedmessage;
